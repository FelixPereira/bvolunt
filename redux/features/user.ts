import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  currentUser: boolean | null;
}

const initialState: InitialState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    logOut: (state) => {
      state.currentUser = null;
    },
  },
});

export const { setCurrentUser, logOut } = userSlice.actions;
export default userSlice.reducer;
