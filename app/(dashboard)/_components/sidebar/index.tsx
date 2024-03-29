'use client';

import { usePathname } from 'next/navigation';
import {
  USER_DASHBOARD_LINKS,
  ORG_DASHBOARD_LINKS,
} from '@/constants/navigationLinks';
import LinkItem from './linkItem/linkItem';

const Sidebar = () => {
  const pathName = usePathname();
  const currentUser = pathName?.split('/')[1];

  const dashboardLinks =
    currentUser === 'usuario' ? USER_DASHBOARD_LINKS : ORG_DASHBOARD_LINKS;

  return (
    <aside
      className='
        flex
        flex-col
        gap-2
        lg:w-[20%]
        border-b
        md:border-b-0
        md:border-r
        border-borderColor
        mr-5
        bg-neutralLight
        min-h-[77vh]
        h-full
        p-5
      '
    >
      {dashboardLinks.map((link) => (
        <LinkItem
          isActive={pathName === link.url}
          key={link.url}
          label={link.label}
          url={link.url}
          icon={link.icon}
        />
      ))}
    </aside>
  );
};

export default Sidebar;
