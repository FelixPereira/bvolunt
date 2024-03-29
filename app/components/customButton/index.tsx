'use client';

import React from 'react';
import Spinner from '@/components/spinner';
import { LucideIcon } from 'lucide-react';

interface CustomButtonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  outline?: boolean;
  disabled?: boolean;
  spinner?: boolean;
  icon?: LucideIcon;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  outline,
  handleClick,
  spinner,
  disabled = spinner,
  icon: Icon,
}) => {
  const spinnerElement = (
    <Spinner color={`${outline ? '#224099' : '#fff'}`} size={8} />
  );

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`
        font-[500]
        py-[8px]
        px-[20px]
        text-[15px]
        w-fit
        rounded
        border
        border-borderColor
        transition
        duration-[300ms]
        min-h-[40px]
        ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
        ${outline ? 'text-primary' : 'text-neutralLight'}
        ${outline ? 'bg-transparent' : 'bg-primary'}            
        hover:${outline && 'bg-neutralGray'}
        hover:brightness-125
      `}
    >
      <span className='flex gap-x-[5px] items-center justify-center'>
        {spinner ? spinnerElement : label}
        {Icon && <Icon color='#fff' />}
      </span>
    </button>
  );
};

export default CustomButton;
