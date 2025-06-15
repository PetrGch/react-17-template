import { configureStore } from '@reduxjs/toolkit';
import { RootState } from '../types';

export const store = configureStore({
  reducer: {
    // Add your reducers here
  },
});

export type AppDispatch = typeof store.dispatch; 