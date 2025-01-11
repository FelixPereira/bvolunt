import { createSlice } from '@reduxjs/toolkit';

const submenuSlice = createSlice({
  name: 'submenuSlice',
  initialState: {
    isSubmenuOpen: false,
  },
  reducers: {
    openSubmenu: (state) => {
      state.isSubmenuOpen = true;
    },
    closeSubmenu: (state) => {
      state.isSubmenuOpen = false;
    },
  },
});

export default submenuSlice.reducer;
export const { openSubmenu, closeSubmenu } = submenuSlice.actions;
