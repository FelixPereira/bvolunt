'use client';

import { useState } from 'react';
// import { Menu } from '@mui/icons-material';
import UserLinks from './UserLinks';
import Avatar from './Avatar';
import { SafeUser } from '@/app/types/safeUser';

interface NavLinksProps {
  currentUser: SafeUser | null;
}

const navLinks = [
  {
    label: 'Projectos',
    url: '/projectos-sociais',
  },
  {
    label: 'Organizações',
    url: '/organizacoes',
  },
  {
    label: 'Eventos',
    url: '/eventos',
  },
];

const NavLinks: React.FC<NavLinksProps> = ({ currentUser }) => {
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
                text-[12px]
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
            currentUser={currentUser}
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
          {/* <Menu fontSize='small' /> */}
          <Avatar src={currentUser?.image} />
        </div>
      </div>
    </nav>
  );
};

export default NavLinks;
