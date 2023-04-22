'use client';

import React from 'react';
import Modal from 'react-modal';
import { Close } from '@mui/icons-material';
import CustomButton from '../customButton';

interface ModalWrapperProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onOpen: () => void;
  primaryActionHandler: () => void;
  secondaryActionHandler?: () => void;
  title: string;
  description: string;
  primaryActionLabel: string;
  secondaryActionLabel?: string;
  bodyContent: React.ReactNode;
  footerContent?: React.ReactNode;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  isOpen,
  onRequestClose,
  title,
  description,
  primaryActionLabel,
  secondaryActionLabel,
  bodyContent,
  footerContent,
  primaryActionHandler,
  secondaryActionHandler,
  onOpen
}) => {
  const handlePrimaryAction = () => {
    primaryActionHandler();
    onRequestClose();
  };

  const handleSecondaryAction = () => {
    if (!secondaryActionHandler) {
      return;
    }

    secondaryActionHandler();
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0 0 0 /50%)',
        },
      }}
    >
      <div
        className='
          w-full
          h-full
          flex
          flex-col
        '
      >
        <button
          onClick={onRequestClose}
          className='
            absolute
            right-5
            top-3
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
            hover:bg-neutralGray
          '
        >
          <Close fontSize='small' />
        </button>
        <div
          className='
            flex 
            flex-col
            gap-y-1
            items-center
            mt-[60px]
          '
        >
          <h3
            className='
              text-[20px]
              font-bold
              text-textTitle
            '
          >
            {title}
          </h3>
          <p className='text-textBody text-[15px]'>{description}</p>
        </div>
        <>{bodyContent}</>
        <div
          className='
            mt-[30px]
            flex
            gap-x-2
            justify-center
          '
        >
          <CustomButton
            onClick={handlePrimaryAction}
            label={primaryActionLabel}
          />
          {secondaryActionLabel && (
            <CustomButton
              onClick={handleSecondaryAction}
              outline
              label={secondaryActionLabel}
            />
          )}
        </div>
        <>{footerContent}</>
      </div>
    </Modal>
  );
};

export default ModalWrapper;
