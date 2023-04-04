import { configureStore } from '@reduxjs/toolkit';
import { organizationApi } from './services/organizationApi';
import fetchQuerySlice from './features/fetchQuerySlice';

export const store = configureStore({
  reducer: {
    [organizationApi.reducerPath]: organizationApi.reducer,
    fetchQuery: fetchQuerySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(organizationApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
