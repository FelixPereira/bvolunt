'use client';

import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href='/'>
      <Image
        src='/images/logo.svg'
        alt='Logo do Portal do Voluntário'
        width='200'
        height='60'
      />
    </Link>
  );
};

export default Logo;