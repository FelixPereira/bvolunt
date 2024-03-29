'use client';

import Link from 'next/link';
import UserLinks from '../userLinks';
import Avatar from '../avatar';
import MenuIcon from '../menuIcon';
import { usePathname } from 'next/navigation';
import { MAIN_MENU_LINKS } from '@/constants/navigationLinks';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { closeSubmenu, openSubmenu } from '@/redux/features/subMenuLinks';
import { UserMenuData } from '@/types';

interface NavLinksProps {
  currentUser: UserMenuData | null;
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
                ${pathName === link.url && 'border-y-[2px] border-borderColor'}
                hover:border-y-[2px] border-borderColor
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
