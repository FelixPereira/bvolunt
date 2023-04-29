import { createSlice } from '@reduxjs/toolkit';

interface initialStateProps {
  registerModalIsOpen: boolean;
  loginModalIsOpen: boolean;
}

const initialState: initialStateProps = {
  registerModalIsOpen: false,
  loginModalIsOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    onOpenRegisterModal: (state) => {
      state.registerModalIsOpen = true;
    },
    onCloseRegisterModal: (state) => {
      state.registerModalIsOpen = false;
    },
    onOpenLoginModal: (state) => {
      state.loginModalIsOpen = true;
    },
    onCloseLoginModal: (state) => {
      state.loginModalIsOpen = false;
    },
  },
});

export const {
  onOpenLoginModal,
  onCloseLoginModal,
  onCloseRegisterModal,
  onOpenRegisterModal,
} = modalSlice.actions;
export default modalSlice.reducer;
