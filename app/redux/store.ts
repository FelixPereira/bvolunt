import { configureStore } from '@reduxjs/toolkit';
import { organizationApi } from './services/organizationApi';
import { socialProjectApi } from './services/socialProjectApi';
import socialProjectQuerySlice from './features/socialProjectQuerySlice';
import organizationQuerySlice from './features/organizationQuerySlice';

export const store = configureStore({
  reducer: {
    [organizationApi.reducerPath]: organizationApi.reducer,
    [socialProjectApi.reducerPath]: socialProjectApi.reducer,
    organizationQuery: organizationQuerySlice,
    socialProjectQuery: socialProjectQuerySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      organizationApi.middleware,
      socialProjectApi.middleware
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
