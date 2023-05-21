import { configureStore } from '@reduxjs/toolkit';
import authRecuder from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authRecuder,
  },
});
