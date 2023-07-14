import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface FetchQuery {
  searchTerm: string;
  province: string;
  ordenar: string;
}

const initialState: FetchQuery = {
  searchTerm: '',
  province: '',
  ordenar: 'desc',
};

export const organizationQuerySlice = createSlice({
  name: 'fetchQuery',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload.searchTerm;
    },
    setProvince: (state, action) => {
      state.province = action.payload.province;
    },
    setOrder: (state, action: PayloadAction<string>) => {
      state.ordenar = action.payload;
    },
  },
});

export const { setSearchTerm, setProvince, setOrder } =
  organizationQuerySlice.actions;
export default organizationQuerySlice.reducer;
