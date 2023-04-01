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
