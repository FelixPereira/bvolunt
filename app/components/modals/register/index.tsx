'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import ModalWrapper from '../modalWrapper';
import {
  closeRegisterTypeModal,
  openRegisterModal,
  openSocialOrgModal,
} from '@/redux/features/modalSlice';


const RegisterTypeModal = () => {
  const { isRegisterTypeModalOpen } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const toggleModals = () => {
    // dispatch(closeRegisterModal());
    // dispatch(openLoginModal());
  };

  const handleRegisterVolunteer = () => {
    dispatch(openRegisterModal());
    dispatch(closeRegisterTypeModal());
  };

  const handleRegisterOrg = () => {
    dispatch(openSocialOrgModal());
    dispatch(closeRegisterTypeModal());
  };

  const footerContent = (
    <div className='text-center mt-4'>
      <span className='text-[14px]'>
        Já tem uma conta?
        <span
          onClick={toggleModals}
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

  const bodyContent = <div></div>;

  return (
    <ModalWrapper
      onRequestClose={() => dispatch(closeRegisterTypeModal())}
      isOpen={isRegisterTypeModalOpen}
      title='Crie a sua conta'
      description='Em qual categoria você se enquadra?'
      primaryActionLabel='Voluntário'
      secondaryActionLabel='Organização'
      bodyContent={bodyContent}
      footerContent={footerContent}
      primaryActionHandler={handleRegisterVolunteer}
      secondaryActionHandler={handleRegisterOrg}
    />
  );
};

export default RegisterTypeModal;
