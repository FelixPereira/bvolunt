import { createSlice } from '@reduxjs/toolkit';

interface initialStateProps {
  registerModalIsOpen: boolean;
  loginModalIsOpen: boolean;
  sociaiProjectModalIsOpen: boolean;
}

const initialState: initialStateProps = {
  registerModalIsOpen: false,
  loginModalIsOpen: false,
  sociaiProjectModalIsOpen: true,
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
    onOpenSocialProjectModal: (state) => {
      state.sociaiProjectModalIsOpen = true;
    },
    onCloseSocialProjectModal: (state) => {
      state.sociaiProjectModalIsOpen = false;
    },
  },
});

export const {
  onOpenLoginModal,
  onCloseLoginModal,
  onCloseRegisterModal,
  onOpenRegisterModal,
  onOpenSocialProjectModal,
  onCloseSocialProjectModal,
} = modalSlice.actions;
export default modalSlice.reducer;
