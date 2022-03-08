import React, { Component, RefObject, createRef } from 'react';
import ReactDOM from 'react-dom';
import hoistNonReactStatics from 'hoist-non-react-statics';
import invariant from 'invariant';
import { StillnessContext, StillnessNodeContext } from '../core';
import { shallowEqual, isPlainObject, isRefAble, isUndefined } from '../utils';
import { Handle } from '../internals';
import {
  UniqueId,
  Identifier,
  StillComponent,
  StillnessManager,
  StillnessMonitor,
  StillnessContextType,
  StillnessContract,
} from '../types';

export interface DecorateHandlerArgs<Props, ItemId> {
  DecoratedComponent: any;
  createHandle: (manager: StillnessManager, contract: StillnessContract) => any;
  createContract: (manager: StillnessManager) => any;
  containerDisplayName: string;
  collect: any;
  options?: any;
}

interface HandleReceiverContract extends StillnessContract {
  receiveId: (id: UniqueId) => void;
  receiveIndex: (index: number) => void;
}

interface HandleReceiver {
  receiveProps: (props: any) => void;
}

interface StillnessComponentProps {}

/**
 * hoc函数,用于封装class组件,
 *
 * @export
 */
export function decorateHandler<Props, CollectedProps, ItemId>({
  DecoratedComponent,
  createHandle,
  createContract,
  containerDisplayName,
  collect,
}: DecorateHandlerArgs<Props, ItemId>): StillComponent<Props> {
  const Decorated: any = DecoratedComponent;

  const displayName =
    DecoratedComponent.displayName ||
    DecoratedComponent.name ||
    'StillnessComponent';

  class StillnessComponent
    extends Component<Props>
    implements StillComponent<Props>
  {
    public static contextType?: React.Context<StillnessContextType> =
      StillnessContext;

    private decoratedRef: any = createRef();
    private manager: StillnessManager | undefined;
    private handleContract: HandleReceiverContract | undefined;
    private handle: HandleReceiver | undefined;
    private handleIndex: number;
    private stillnessParentId: Identifier;

    public constructor(props: Props) {
      super(props);

      console.log('初始化');
    }

    public getDecoratedComponentInstance() {
      invariant(
        this.decoratedRef.current,
        'In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()'
      );

      return this.decoratedRef.current as any;
    }

    public componentDidMount() {
      this.receiveProps(this.props);
      this.handleChange();
    }

    public componentDidUpdate(
      prevProps: Readonly<StillnessComponentProps>
    ): void {
      if (!shallowEqual(this.props, prevProps)) {
        this.receiveProps(this.props);
        this.handleChange();
      }
    }

    public shouldComponentUpdate(nextProps: any, nextState: any) {
      return (
        !shallowEqual(nextProps, this.props) ||
        !shallowEqual(nextState, this.state)
      );
    }

    public receiveProps(props: any) {
      if (!this.manager || !this.handleContract || !this.handle) {
        return;
      }

      this.handle.receiveProps(props);
      if (this.handleContract.getStillnessId() !== this.stillnessParentId) {
        this.registerHandle(this.stillnessParentId, props);
      }

      this.handleContract.receiveId(this.stillnessParentId);
      
    }

    public registerHandle(id, props: any) {
      if (!this.manager) {
        return;
      }

      this.handleIndex = this.manager.getActions().registerVNodeHandle({
        id,
        handle: this.handle,
        index: this.handleIndex,
      });
      this.handleContract.receiveIndex(this.handleIndex);
    }

    public handleChange = () => {
      const nextState = this.getCurrentState();
      if (!shallowEqual(nextState, this.state as unknown as CollectedProps)) {
        this.setState({ ...nextState });
      }
    };

    public getCurrentState(): CollectedProps {
      if (!this.handleContract) {
        return {} as CollectedProps;
      }

      const nextState = collect(
        this.props,
        this.handleContract
      ) as CollectedProps;

      if (process.env.NODE_ENV !== 'production') {
        invariant(
          isPlainObject(nextState),
          'Expected `collect` specified as the second argument to ' +
            '%s for %s to return a plain object of props to inject. ' +
            'Instead, received %s.',
          containerDisplayName,
          displayName,
          nextState
        );
      }

      return nextState;
    }

    public render() {
      return (
        <StillnessNodeContext.Consumer>
          {({ stillnessParentId }) => {
            if (isUndefined(this.context?.stillnessManager)) {
              return null;
            }

            this.stillnessParentId = stillnessParentId;

            this.receiveStillnessManager(
              this.context.stillnessManager as unknown as StillnessManager
            );

            return (
              <Decorated
                {...this.props}
                {...this.getCurrentState()}
                ref={isRefAble(Decorated) ? this.decoratedRef : null}
              />
            );
          }}
        </StillnessNodeContext.Consumer>
      );
    }

    public receiveStillnessManager(stillnessManager: StillnessManager) {
      if (this.manager !== undefined) {
        return;
      }

      if (stillnessManager === undefined) {
        return;
      }

      this.manager = stillnessManager;

      // 这里需要对parentId进行初始化处理
      this.handleContract = createContract(stillnessManager);
      this.handle = createHandle(
        this.manager,
        this.handleContract as unknown as StillnessContract
      );
    }
  }

  return hoistNonReactStatics(
    StillnessComponent,
    DecoratedComponent
  ) as any as StillComponent<Props>;
}
