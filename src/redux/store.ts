import { configureStore } from '@reduxjs/toolkit';
import { organizationApi } from './services/organization';
import { fetchQueryReducer } from './fetchQuerySlice';

export const store = configureStore({
  reducer: {
    [organizationApi.reducerPath]: organizationApi.reducer,
    fetchQuery: fetchQueryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(organizationApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
