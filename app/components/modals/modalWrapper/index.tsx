'use client';

import React from 'react';
import Modal from 'react-modal';
import CustomButton from '../../customButton';
import { X, LucideIcon } from 'lucide-react';

interface ModalWrapperProps {
  isOpen: boolean;
  isLoading?: boolean;
  primaryActionHandler: () => void;
  secondaryActionHandler?: () => void;
  title: string;
  description: string;
  primaryActionLabel: string;
  secondaryActionLabel?: string;
  bodyContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  onRequestClose: () => void;
  icon?: LucideIcon;
  outline?: boolean;
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
  outline,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
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
            hover:shadow-lg
          '
        >
          <X />
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
            gap-x-5
            justify-center
            items-center
          '
        >
          <CustomButton
            handleClick={primaryActionHandler}
            label={primaryActionLabel}
            disabled={isLoading}
            spinner={isLoading}
          />
          {secondaryActionLabel && secondaryActionHandler && (
            <CustomButton
              handleClick={secondaryActionHandler}
              outline={outline}
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
