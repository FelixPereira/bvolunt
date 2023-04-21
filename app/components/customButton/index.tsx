'use client';

import React from "react";

interface CustomButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  outline?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, outline, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        font-[600]
        py-[10px]
        px-[30px]
        text-[14px]
        transition
        duration-[300ms]
        cursor-pointer
        rounded
        border-[1px]
        w-full
        border-primary
        ${outline ? 'text-textBody' : 'text-neutralLight'}
        ${outline ? 'bg-transparent' : 'bg-primary'}
        hover:${outline ? 'text-neutralLight' : 'text-textBody'}
        hover:${outline ? 'bg-primary' : 'bg-transparent'}
      `}
    >
      {children}
    </button>
  );
};

export default CustomButton;
