import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useDispatch, useSelector } from 'react-redux';

import authReducer from './auth';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export const useAppSelector = useSelector.withTypes<RootState>();

declare global {
  export type RootState = ReturnType<typeof store.getState>;

  export type AppDispatch = typeof store.dispatch;
}
