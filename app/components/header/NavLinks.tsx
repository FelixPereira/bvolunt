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
      <ul
        className='
          hidden
          md:flex
          justify-between
          items-center
        '
      >
        {navLinks.map((link) => (
          <li key={link.url}>
            <a
              href={link.url}
              key={link.label}
              className='
                font-[600]
                uppercase
                text-textBody
                text-[13px]
                px-3
                py-2
                rounded
                transition
                duration-[200ms]
                hover:bg-primary
                hover:text-neutralLight
              '
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className='relative'>
        {isLinksOpen && (
          <UserLinks
            setIsLinksOpen={setIsLinksOpen}
            isLinksOpen={isLinksOpen}
          />
        )}
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
