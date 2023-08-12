'use client';

import React from 'react';
import Spinner from '@/components/spinner';

interface CustomButtonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  outline?: boolean;
  disabled?: boolean;
  spinner?: boolean;
  icon?: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  outline,
  handleClick,
  spinner,
  disabled,
  icon,
}) => {
  const spinnerElement = <Spinner color='#fff' size={8} />;

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`
        font-[500]
        py-[8px]
        px-[20px]
        text-[15px]
        transition
        w-fit
        duration-[300ms]
        rounded
        border
        border-primary
        ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
        ${outline ? 'text-textBody' : 'text-neutralLight'}
        ${outline ? 'bg-transparent' : 'bg-primary'}
        hover:${outline ? 'text-neutralLight' : 'text-textBody'}
        hover:${outline ? 'bg-primary' : 'bg-transparent'}
        hover:brightness-125
      `}
    >
      <span className='flex gap-x-[5px] items-center justify-center'>
        {icon && icon}
        {spinner ? spinnerElement : label}
      </span>
    </button>
  );
};

export default CustomButton;
