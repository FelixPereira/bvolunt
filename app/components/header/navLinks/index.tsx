'use client';

import Link from 'next/link';
import UserLinks from '../userLinks';
import Avatar from '../avatar';
import { SafeUser } from '@/types';
import { usePathname } from 'next/navigation';
import MenuIcon from '../menuIcon';
import { MAIN_MENU_LINKS } from '@/constants/navigationLinks';
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
        {MAIN_MENU_LINKS.map((link) => (
          <li key={link.url}>
            <Link
              href={link.url}
              key={link.label}
              className={`
                font-[600]
                uppercase
                text-[12px]
                py-2
                rounded
                transition
                duration-[200ms]
                ${pathName === link.url && 'border-y-[2px] border-primary'}
                hover:border-y-[2px] border-primary
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
          <Avatar currentUser={currentUser} />
        </MenuIcon>
      </div>
    </nav>
  );
};

export default NavLinks;
