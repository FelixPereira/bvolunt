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
        font-[600]
        py-[15px]
        px-[30px]
        text-[15px]
        transition
        duration-[300ms]
        rounded
        border-[1px]
        w-full
        border-primary
        ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
        ${outline ? 'text-textBody' : 'text-neutralLight'}
        ${outline ? 'bg-transparent' : 'bg-primary'}
        hover:${outline ? 'text-textBody' : 'text-neutralLight'}
        hover:${outline ? 'bg-neutralLight' : 'bg-transparent'}
      `}
    >
      {spinner ? spinner : label}
    </button>
  );
};

export default CustomButton;
