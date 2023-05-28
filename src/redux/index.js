import { combineReducers, configureStore } from '@reduxjs/toolkit';

import adminSlice from './slices/adminSlice';
import museumSlice from './slices/museumSlice';
import userSlice from './slices/userSlice';

const rootReducer = combineReducers({
  museums: museumSlice,
  user: userSlice,
  admin: adminSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
