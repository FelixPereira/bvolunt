'use client';

import { NAV_LINKS } from '@/app/constants/navLinks';
import { usePathname } from 'next/navigation';
import MenuItem from './MenuItem';

const MobileMenu = () => {
  const pathName = usePathname();

  return (
    <nav
      className='
        pt-[30px]
        pb-[30px]
        flex
        items-center
        justify-between
        md:hidden
      '
    >
      <MenuItem linksList={NAV_LINKS} menuTitle='MENU' pathName={pathName} />
      <MenuItem linksList={NAV_LINKS} menuTitle='USUÁRIO' pathName={pathName} />
    </nav>
  );
};

export default MobileMenu;
