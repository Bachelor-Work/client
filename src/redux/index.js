import { combineReducers, configureStore } from '@reduxjs/toolkit';
import museumSlice from './slices/museumSlice';
import userSlice from './slices/userSlice';
import adminSlice from './slices/adminSlice';

const rootReducer = combineReducers({
  museums: museumSlice,
  user: userSlice,
  admin: adminSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
