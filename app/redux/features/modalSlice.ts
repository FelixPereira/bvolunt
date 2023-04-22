import { createSlice } from '@reduxjs/toolkit';

interface initialStateProps {
  isOpen: boolean;
}

const initialState: initialStateProps = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    onOpen: (state) => {
      state.isOpen = true;
    },
    onClose: (state) => {
      state.isOpen = false;
    },
  },
});

export const { onOpen, onClose } = modalSlice.actions;
export default modalSlice.reducer;
