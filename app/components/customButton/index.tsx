'use client';

import React from 'react';

interface CustomButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  outline?: boolean;
  disabled?: boolean;
  spinner?: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  outline,
  onClick,
  spinner,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        font-[500]
        py-[15px]
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
      {spinner ? spinner : label}
    </button>
  );
};

export default CustomButton;
