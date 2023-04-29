'use client';

import Image from 'next/image';

interface AvatarProps {
  src?: string | null;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      src={src || '/images/avatar.jpg'}
      alt='avatar'
      width='25'
      height='25'
      className='rounded-full hidden md:block'
    />
  );
};

export default Avatar;
