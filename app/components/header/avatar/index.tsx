'use client';

import Image from 'next/image';
import { SafeUser } from '@/types/safeUser';

import { UserCircle2 } from 'lucide-react';
import { getUserName } from '@/utils/user';

interface AvatarProps {
  currentUser: SafeUser | null;
}

const Avatar: React.FC<AvatarProps> = ({ currentUser }) => {
  const userName = getUserName(currentUser?.name);
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
              className='
                rounded-full 
                hidden 
                md:block 
                border-2 
                border-neutralGray
              '
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
                {userName?.initials}
              </strong>
            </div>
          )}
        </div>
      ) : (
        <UserCircle2 width={25} height={25} />
      )}
    </>
  );
};

export default Avatar;
