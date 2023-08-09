'use client';

import React from 'react';
import Modal from 'react-modal';
import CustomButton from '../../customButton';
import { useAppDispatch } from '@/redux/hooks';
import { closeSocialProjectModal } from '@/redux/features/modalSlice';
import Image from 'next/image';

interface ModalWrapperProps {
  isOpen: boolean;
  isLoading: boolean;
  primaryActionHandler: () => void;
  secondaryActionHandler?: () => void;
  title: string;
  description: string;
  primaryActionLabel: string;
  secondaryActionLabel?: string;
  bodyContent: React.ReactNode;
  footerContent?: React.ReactNode;
  onRequestClose: () => void;
  icon?: string;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  isOpen,
  isLoading,
  title,
  description,
  primaryActionLabel,
  secondaryActionLabel,
  bodyContent,
  footerContent,
  primaryActionHandler,
  secondaryActionHandler,
  onRequestClose,
  icon,
}) => {
  const dispatch = useAppDispatch();

  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      // appElement={document.querySelector('body') as HTMLElement | undefined}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '450px',
          maxHeight: '90vh',
          maxWidth: '80%',
        },
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0 0 0 /50%)',
          zIndex: '2',
        },
      }}
    >
      <div
        className='
          w-full
          h-full
          flex
          flex-col
          z-[2]
        '
      >
        <button
          onClick={onRequestClose}
          className='
            absolute
            right-5
            top-5
            cursor-pointer
            mb-5
            flex
            items-center
            justify-center
            w-[40px]
            h-[40px]
            rounded-full
            transition
            duration-[300ms]
            bg-neutralGray
            hover:bg-primary
            hover:text-neutralLight
          '
        >
          {/* <Close fontSize='medium' /> */}
        </button>
        <div
          className='
            flex 
            flex-col
            gap-y-1
            items-center
            mt-[50px]
          '
        >
          <h3
            className='
              text-[22px]
              font-bold
              text-textTitle
              text-center
            '
          >
            {title}
          </h3>
          <p
            className='
              text-textBody
              text-[15px]
              text-center
            '
          >
            {description}
          </p>
        </div>
        <>{bodyContent}</>
        <div
          className='
            mt-[30px]
            flex
            flex-col
            gap-y-5
            justify-center
            items-center
          '
        >
          <CustomButton
            onClick={primaryActionHandler}
            label={primaryActionLabel}
            disabled={isLoading}
            spinner={isLoading}
          />
          {secondaryActionLabel && secondaryActionHandler && (
            <CustomButton
              onClick={secondaryActionHandler}
              outline
              label={secondaryActionLabel}
              icon={icon}
            />
          )}
        </div>
        <>{footerContent}</>
      </div>
    </Modal>
  );
};

export default ModalWrapper;
