'use client';

import Image from 'next/image';
import { SafeUser } from '@/types/safeUser';
import { CaretDown, UserCircle } from 'phosphor-react';

interface AvatarProps {
  currentUser: SafeUser | null;
}

const Avatar: React.FC<AvatarProps> = ({ currentUser }) => {
  const getInitials = (name: string) => {
    const initials = name.split(' ');

    return initials[0][0] + initials[1][0];
  };

  return (
    <>
      {true ? (
        <div className='flex gap-1 items-center'>
          {currentUser?.image ? (
            <Image
              src={currentUser?.image}
              alt='Avatar'
              width='30'
              height='30'
              className='rounded-full hidden md:block border-2 border-neutralGray'
            />
          ) : (
            <div
              className='
                hidden 
                items-center
                justify-center
                rounded-full
                bg-primary
                w-[30px]
                h-[30px]
                md:flex
              '
            >
              <strong className='text-neutralLight text-[13px]'>
                {getInitials('Félix Pereira')}
              </strong>
            </div>
          )}

          <strong className='text-[14px]'>
            {currentUser?.name} Félix Pereira
          </strong>
          <CaretDown weight='bold' />
        </div>
      ) : (
        <UserCircle weight='bold' width={25} height={25} />
      )}
    </>
  );
};

export default Avatar;
