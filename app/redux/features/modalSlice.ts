import { createSlice } from '@reduxjs/toolkit';

interface initialStateProps {
  isRegisterModalOpen: boolean;
  isLoginModalOpen: boolean;
  isSocialProjectModalOpen: boolean;
  isSocialOrgModalOpen: boolean;
  isRegisterTypeModalOpen: boolean;
}

const initialState: initialStateProps = {
  isRegisterModalOpen: false,
  isLoginModalOpen: false,
  isSocialProjectModalOpen: false,
  isSocialOrgModalOpen: false,
  isRegisterTypeModalOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openRegisterModal: (state) => {
      state.isRegisterModalOpen = true;
    },
    closeRegisterModal: (state) => {
      state.isRegisterModalOpen = false;
    },
    openLoginModal: (state) => {
      state.isLoginModalOpen = true;
    },
    closeLoginModal: (state) => {
      state.isLoginModalOpen = false;
    },
    openSocialProjectModal: (state) => {
      state.isSocialProjectModalOpen = true;
    },
    closeSocialProjectModal: (state) => {
      state.isSocialProjectModalOpen = false;
    },
    openSocialOrgModal: (state) => {
      state.isSocialOrgModalOpen = true;
    },
    closeSocialOrgModal: (state) => {
      state.isSocialOrgModalOpen = false;
    },
    openRegisterTypeModal: (state) => {
      state.isRegisterTypeModalOpen = true;
    },
    closeRegisterTypeModal: (state) => {
      state.isRegisterTypeModalOpen = false;
    },
  },
});

export const {
  openLoginModal,
  closeLoginModal,
  closeRegisterModal,
  openRegisterModal,
  openSocialProjectModal,
  closeSocialProjectModal,
  openSocialOrgModal,
  closeSocialOrgModal,
  closeRegisterTypeModal,
  openRegisterTypeModal,
} = modalSlice.actions;
export default modalSlice.reducer;
