import counterReducer from './slices/counterSlice';
import {combineReducers} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
