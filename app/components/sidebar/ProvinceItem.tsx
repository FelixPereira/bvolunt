'use client';

import { useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import queryString from 'query-string';

interface ProvinceItemProps {
  selected: boolean;
  label: string;
  slug: string;
}

const ProvinceItem: React.FC<ProvinceItemProps> = ({
  selected,
  label,
  slug,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const filterProjects = useCallback(() => {
    let currentQuery = {};
    if (params) {
      currentQuery = params;
    }

    const url = queryString.stringifyUrl({
      url: '/',
      query: {
        province: slug,
      },
    });

    router.push(url);
  }, [params, router, slug]);

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
      {label} (20)
    </li>
  );
};

export default ProvinceItem;
