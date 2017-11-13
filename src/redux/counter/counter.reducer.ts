import { Action } from '@ngrx/store';

import { PlusAction, INCREMENT, DECREMENT, PLUS } from './counter.actions';

export function counterReducer(state: number = 102, action: Action): number {
  if (action === null) {
    return state;
  }
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case PLUS:
      return state + (<PlusAction>action).payload;
    default:
      return state;
  }
}
