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

export const socialProjectQuerySlice = createSlice({
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
  socialProjectQuerySlice.actions;
export default socialProjectQuerySlice.reducer;
