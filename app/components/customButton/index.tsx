'use client';

import React from 'react';
import Spinner from '@/components/spinner';
import Image from 'next/image';

interface CustomButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  outline?: boolean;
  disabled?: boolean;
  spinner?: boolean;
  icon?: any;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  outline,
  onClick,
  spinner,
  disabled,
  icon,
}) => {
  const spinnerElement = <Spinner color='#fff' size={8} />;

  return (
    <button
      onClick={onClick}
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
      <span className='flex gap-x-5 items-center justify-center'>
        {icon && <Image src={icon} alt='Icon' width={25} height={25} />}
        {spinner ? spinnerElement : label}
      </span>
    </button>
  );
};

export default CustomButton;
