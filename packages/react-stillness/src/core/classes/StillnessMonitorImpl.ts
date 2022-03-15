import { Store } from 'redux';
import invariant from 'invariant';
import {
  StillnessMonitor,
  Identifier,
  Unsubscribe,
  Listener,
  UniqueId,
} from '../../types';
import { State } from '../reducers';
import { State as VNodeState } from '../reducers/vNode';
import { shallowEqual, isUndefined } from '../../utils';
import {
  operationTypes,
  lifeCycleTypes,
  effectTypes,
  rootId,
} from '../../constants';

/**
 * 这里是真实调用
 */
export class StillnessMonitorImpl implements StillnessMonitor {
  private store: Store<State>;

  public constructor(store) {
    this.store = store;
  }

  /**
   *
   * @param listener
   * @param params
   * @returns
   */
  public subscribeToStateChange(
    listener: Listener,
    params: { parentId: UniqueId }
  ): Unsubscribe {
    const { parentId } = params;
    invariant(typeof listener === 'function', 'listener must be a function.');
    invariant(typeof parentId === 'string', 'parentId is required');

    let prevOperation = this.store.getState().operation;
    const handleChange = () => {
      const store = this.store.getState();
      const currentOperation = store.operation;

      try {
        const canSkipListener =
          !lifeCycleTypes.includes(currentOperation.type) ||
          shallowEqual(prevOperation, currentOperation) ||
          !currentOperation.targetIds.includes(parentId);

        if (!canSkipListener) {
          listener();
        }
      } finally {
        prevOperation = currentOperation;
      }
    };

    return this.store.subscribe(handleChange);
  }

  public subscribeToEffectChange(
    listener: Listener,
    params: { uniqueId: UniqueId; type?: Identifier }
  ): Unsubscribe {
    const { uniqueId, type } = params;
    invariant(!isUndefined(uniqueId), 'uniqueId is required');

    let prevOperation = this.store.getState().operation;
    const handleChange = () => {
      const store = this.store.getState();
      const currentOperation = store.operation;

      try {
        const canSkipListener =
          !effectTypes.includes(currentOperation.type) ||
          shallowEqual(prevOperation, currentOperation) ||
          !currentOperation.targetIds.includes(uniqueId);

        if (!canSkipListener) {
          listener();
        }
      } finally {
        prevOperation = currentOperation;
      }
    };

    return this.store.subscribe(handleChange);
  }

  public getStillnessItem(uniqueId: UniqueId): VNodeState {
    return this.store.getState().vNodes[uniqueId];
  }

  public getStillnessId(uniqueId): Identifier {
    return this.store.getState().vNodes[uniqueId]?.uniqueId;
  }

  public getStillnessType(uniqueId): Identifier {
    return this.store.getState().vNodes[uniqueId]?.type;
  }

  public isStillness(uniqueId): boolean {
    if (uniqueId === rootId) {
      return false;
    }

    const node = this.store.getState().vNodes[uniqueId];

    if (
      node.isStillness === true ||
      (node.isStillness === false && node.visible === false)
    ) {
      return true;
    }
    return false;
  }
}
