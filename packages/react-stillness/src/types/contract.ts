import { Identifier, UniqueId } from './core';
import { StillnessMonitor } from './monitors';

export interface ActionsParams{
  id?: Identifier;
}

export interface UnsetParams {
  id?: Identifier;
  type?: Identifier;
}

export interface StillnessContract {
  receiveId: (id: UniqueId) => void;
  receiveItem: (item: any) => void;

  getStillnessId(): UniqueId | null;

  getStillnessType(): UniqueId | null;

  unset(params: UnsetParams): void;

  clear(): void;
}