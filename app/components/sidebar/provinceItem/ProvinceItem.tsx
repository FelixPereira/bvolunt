'use client';

import { useCallback } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import queryString from 'query-string';
import { getProjectsByProvince } from '@/app/actions/getProjectByProvince';

interface ProvinceItemProps {
  selected: boolean;
  label: string;
  slug: string;
}

const ProvinceItem: React.FC<ProvinceItemProps> = ({
  selected,
  label,
  slug: province,
}) => {
  // const { totalProjects } = useGetProjectsQuantity(label);
  const router = useRouter();
  const searchQuery = useSearchParams();
  const pathName = usePathname();

  const filterProjects = useCallback(() => {
    const orderby = searchQuery?.get('orderby');
    const currentQuery = orderby ? { province, orderby } : { province };

    const url = queryString.stringifyUrl({
      url: pathName as string,
      query: {
        ...currentQuery
      },
    });

    router.push(url);
  }, [router, province, pathName, searchQuery]);

  return (
    <li
      className={`
        list-none
        border-l-[3px]
        mb-[15px]
        cursor-pointer
        w-fit
        py-[5px]
        pl-[10px]
        pr-[20px]
        rounded
        hover:bg-primary
        hover:text-neutralLight
        hover:transition
        hover:duration-[.3s]
        hover:border-l-secondary
        ${selected ? 'bg-primary' : 'bg-transparent'}
        ${selected ? 'text-neutralLight' : 'text-textBody'}
        ${selected ? 'border-l-secondary' : 'border-l-primary'}
      `}
      onClick={filterProjects}
    >
      {label} (0)
    </li>
  );
};

export default ProvinceItem;
