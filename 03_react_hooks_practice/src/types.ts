export enum CountActionKind {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE'
}

export interface CountAction {
  type: CountActionKind
  payload?: number
}

export interface CountState {
  count: number
}