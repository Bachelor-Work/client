import { combineReducers, configureStore } from '@reduxjs/toolkit';
import museumReducer from './museumReducer';

const rootReducer = combineReducers({
  museum: museumReducer
});

export const store = configureStore({
  reducer: rootReducer
});
