import { createSlice } from '@reduxjs/toolkit';

const mobileMenuSlice = createSlice({
  name: 'mobileMenuSlice',
  initialState: {
    isMenuOpened: false,
  },
  reducers: {
    toggleMobileMenu: (state) => {
      state.isMenuOpened = !state.isMenuOpened;
    },
  },
});

export const { toggleMobileMenu } = mobileMenuSlice.actions;
export default mobileMenuSlice.reducer;