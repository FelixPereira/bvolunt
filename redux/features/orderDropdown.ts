import { createSlice } from '@reduxjs/toolkit';

const orderDropdownSlice = createSlice({
  name: 'orderDropdownSlice',
  initialState: {
    isOrderDropdownOpen: false,
  },
  reducers: {
    openOrderDropdown: (state) => {
      state.isOrderDropdownOpen = true;
    },
    closeOrderDropdown: (state) => {
      state.isOrderDropdownOpen = false;
    },
  },
});

export default orderDropdownSlice.reducer;
export const { openOrderDropdown, closeOrderDropdown } =
  orderDropdownSlice.actions;
