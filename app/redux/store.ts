import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './features/modalSlice';
import userSlice from './features/user';
import mobileMenuSlice from './features/mobileMenu';
import submenuSlice from './features/subMenuLinks';
import orderDropdownSlice from './features/orderDropdown';

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    currentUser: userSlice,
    mobileMenu: mobileMenuSlice,
    submenu: submenuSlice,
    orderBy: orderDropdownSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
