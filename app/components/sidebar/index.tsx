'use client';

import { PROVINCES } from '@/data/provinces';
import { useCallback, useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { formatToLowerCased } from '@/utils';
import Heading from '../heading';
import queryString from 'query-string';
import ProvinceButton from './provinceButton';

interface SidebarProps {
  data: unknown;
}

const Sidebar: React.FC<SidebarProps> = ({ data }) => {
  const params = useSearchParams();
  const router = useRouter();
  const searchQuery = useSearchParams();
  const pathName = usePathname();

  const currentProvince = useMemo(() => {
    let provincia;
    if (params) {
      provincia = params.get('provincia');
      if (!provincia) return null;

      return provincia;
    }
  }, [params]);

  const filterProjects = useCallback(
    (provincia: string) => {
      const ordenar = searchQuery?.get('ordenar');
      const currentQuery = ordenar ? { provincia, ordenar } : { provincia };

      const url = queryString.stringifyUrl({
        url: pathName as string,
        query: {
          ...currentQuery,
        },
      });

      router.push(url);
    },
    [router, pathName, searchQuery]
  );

  return (
    <aside className='mb-[50px] lg:m-0 lg:w-[20%] lg:border-r border-primary'>
      <Heading title='Filtrar por província' />
      <ul className='flex flex-wrap gap-x-2 lg:flex-col mt-6'>
        <ProvinceButton
          label='Todas'
          selected={currentProvince === 'Todas'}
          slug='todas'
          data={data}
          filterProjects={filterProjects}
          type='all'
        />

        {PROVINCES.map((province) => (
          <ProvinceButton
            key={province.name}
            label={province.name}
            selected={currentProvince === formatToLowerCased(province.name)}
            slug={formatToLowerCased(province.name)}
            data={data}
            filterProjects={filterProjects}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
