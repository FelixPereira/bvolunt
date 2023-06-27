'use client';

import { useState } from 'react';
import Link from 'next/link';
import UserLinks from '../userLinks';
import Avatar from '../avatar';
import { SafeUser } from '@/app/types/safeUser';
import { usePathname } from 'next/navigation';
import MenuIcon from '../menuIcon';
import { NAV_LINKS } from '@/app/constants/navLinks';

interface NavLinksProps {
  currentUser: SafeUser | null;
}

const NavLinks: React.FC<NavLinksProps> = ({ currentUser }) => {
  const [isLinksOpen, setIsLinksOpen] = useState(false);
  const pathName = usePathname();

  return (
    <nav
      className='
        hidden
        md:flex
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
          gap-x-3
        '
      >
        {NAV_LINKS.map((link) => (
          <li key={link.url}>
            <Link
              href={link.url}
              key={link.label}
              className={`
                font-[600]
                uppercase
                text-[12px]
                pb-2
                rounded
                transition
                duration-[200ms]
                ${pathName === link.url && 'border-b-[2px] border-primary'}
                hover:border-b-[2px] border-primary
              `}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div>
        {isLinksOpen && (
          <UserLinks
            setIsLinksOpen={setIsLinksOpen}
            isLinksOpen={isLinksOpen}
            currentUser={currentUser}
          />
        )}
        <MenuIcon handleClick={() => setIsLinksOpen(!isLinksOpen)}>
          {/* <Menu fontSize='small' /> */}
          MenuIcon
          <Avatar src={currentUser?.image} />
        </MenuIcon>
      </div>
    </nav>
  );
};

export default NavLinks;
