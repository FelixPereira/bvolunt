'use client';

import { useState } from 'react';
import Link from 'next/link';
import UserLinks from '../userLinks';
import Avatar from '../avatar';
import { SafeUser } from '@/types/safeUser';
import { usePathname } from 'next/navigation';
import MenuIcon from '../menuIcon';
import { NAV_LINKS } from '@/constants/navLinks';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { closeSubmenu, openSubmenu } from '@/redux/features/subMenuLinks';

interface NavLinksProps {
  currentUser: SafeUser | null;
}

const NavLinks: React.FC<NavLinksProps> = ({ currentUser }) => {
  const pathName = usePathname();
  const { isSubmenuOpen } = useAppSelector((state) => state.submenu);
  const dispatch = useAppDispatch();

  const toggleSubmenu = () => {
    if (isSubmenuOpen) return dispatch(closeSubmenu());

    return dispatch(openSubmenu());
  };

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

      <div className='relative'>
        {isSubmenuOpen && (
          <UserLinks
            setIsLinksOpen={toggleSubmenu}
            isLinksOpen={isSubmenuOpen}
            currentUser={currentUser}
          />
        )}
        <MenuIcon handleClick={toggleSubmenu}>
          {/* <Menu fontSize='small' /> */}
          MenuIcon
          <Avatar src={currentUser?.image} />
        </MenuIcon>
      </div>
    </nav>
  );
};

export default NavLinks;
