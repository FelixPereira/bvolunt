import { createSlice } from '@reduxjs/toolkit';

export interface FetchQuery {
  searchTerm: string;
  province: string;
  orderBy: string;
}

const INITIAL_STATE: FetchQuery = {
  searchTerm: '',
  province: '',
  orderBy: '',
};

export const fetchQuerySlice = createSlice({
  name: 'filter',
  initialState: INITIAL_STATE,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload.searchTerm;
    },
    setProvince: (state, action) => {
      state.province = action.payload.province;
    },
    setOrder: (state, action) => {
      state.orderBy = action.payload.orderBy;
    },
  },
});

export const { setSearchTerm, setProvince, setOrder } = fetchQuerySlice.actions;
export const { reducer: fetchQueryReducer } = fetchQuerySlice;
