import { AppState } from './app.state';
import { counterReducer } from './counter/counter.reducer';

export const AppReducer = {
  counter: counterReducer,
};
