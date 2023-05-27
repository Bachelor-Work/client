import { combineReducers, configureStore } from '@reduxjs/toolkit';
import museumSlice from './museumSlice';

const rootReducer = combineReducers({
  museums: museumSlice
});

export const store = configureStore({
  reducer: rootReducer
});
