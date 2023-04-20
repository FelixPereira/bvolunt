'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu } from '@mui/icons-material';
import UserLinks from './UserLinks';


const navLinks = [
  {
    label: 'Projectos',
    url: '/projectos-sociais',
  },
  {
    label: 'Organizações',
    url: '/organizacoes',
  },
];

const NavLinks = () => {
  const [isLinksOpen, setIsLinksOpen] = useState(false);

  return (
    <nav
      className='
        flex
        justify-between
        items-center
        gap-x-3
      '
    >
      {navLinks.map((link) => (
        <a
          href={link.url}
          key={link.label}
          className='
            font-[600]
            text-textBody
            text-[15px]
            px-3
            py-1
            rounded
            transition
            duration-[200ms]
            hover:bg-neutralGray
          '
        >
          {link.label}
        </a>
      ))}

      <div className='relative'>
        {isLinksOpen && <UserLinks />}
        <div
          onClick={() => setIsLinksOpen(!isLinksOpen)}
          className='
            flex
            gap-x-2
            justify-between
            items-center
            border-[1px]
            border-neutralGray
            px-3
            py-2
            rounded
            hover:shadow-lg
            cursor-pointer
          '
        >
          <Menu fontSize='small' />
          <Image
            src='/images/avatar.jpg'
            alt='avatar'
            width='25'
            height='25'
            className='rounded-full'
          />
        </div>
      </div>
    </nav>
  );
};

export default NavLinks;
