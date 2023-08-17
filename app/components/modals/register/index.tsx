'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import ModalWrapper from '../modalWrapper';
import {
  closeRegisterTypeModal,
  openLoginModal,
  openRegisterModal,
  openSocialOrgModal,
} from '@/redux/features/modalSlice';

const enum ModalToOpen {
  login = 'login',
  regVolunteer = 'regVolunteer',
  regOrganization = 'regOrganization',
}

const RegisterTypeModal = () => {
  const { isRegisterTypeModalOpen } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const toggleModals = (typeOfModal: string) => {
    if (typeOfModal === ModalToOpen.login) {
      dispatch(openLoginModal());
    }
    if (typeOfModal === ModalToOpen.regVolunteer) {
      dispatch(openRegisterModal());
    }
    if (typeOfModal === ModalToOpen.regOrganization) {
      dispatch(openSocialOrgModal());
    }

    return dispatch(closeRegisterTypeModal());
  };

  const footerContent = (
    <div className='text-center mt-4'>
      <span className='text-[14px]'>
        Já tem uma conta?
        <span
          onClick={() => toggleModals('login')}
          className='
            underline
            cursor-pointer
            ml-1
            font-bold
            hover:text-primary
          '
        >
          Inicie sessão
        </span>
      </span>
    </div>
  );

  return (
    <ModalWrapper
      onRequestClose={() => dispatch(closeRegisterTypeModal())}
      isOpen={isRegisterTypeModalOpen}
      title='Crie a sua conta'
      description='Em qual categoria você se enquadra?'
      primaryActionLabel='Voluntário'
      secondaryActionLabel='Organização'
      footerContent={footerContent}
      primaryActionHandler={() => toggleModals('regVolunteer')}
      secondaryActionHandler={() => toggleModals('regOrganization')}
    />
  );
};

export default RegisterTypeModal;
