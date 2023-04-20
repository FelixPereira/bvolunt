'use client';

import Image from "next/image";

const Logo = () => {
  return (
    <a href='/'>
      <Image
        src='/images/logo.svg'
        alt='Logo do Portal do Voluntário'
        width='200'
        height='60'
      />
    </a>
  );
};

export default Logo;