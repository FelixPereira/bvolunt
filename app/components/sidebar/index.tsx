'use client';

import { PROVINCES } from '@/app/data/provinces';
import { useCallback, useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { formatToLowerCased } from '@/app/utils';
import ProvinceItem from './provinceItem';
import Heading from '../heading';
import { SocialProject } from '@prisma/client';
import queryString from 'query-string';

interface SidebarProps {
  data?: SocialProject[];
}

const Sidebar: React.FC<SidebarProps> = ({ data }) => {
  const params = useSearchParams();
  const router = useRouter();
  const searchQuery = useSearchParams();
  const pathName = usePathname();

  const currentProvince = useMemo(() => {
    let province;
    if (params) {
      province = params.get('province');
      if (!province) return null;

      return province;
    }
  }, [params]);

  const filterProjects = useCallback(
    (province: string) => {
      const orderby = searchQuery?.get('orderby');
      const currentQuery = orderby ? { province, orderby } : { province };

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
    <aside className='lg:w-[20%]'>
      <Heading
        title='Pesquisar por província'
        subtitle='Veja os projectos de uma província'
      />
      <ul className='flex flex-wrap gap-x-2 lg:flex-col mt-6'>
        <ProvinceItem
          label='Todas'
          selected={currentProvince === 'Todas'}
          slug='todas'
          data={data}
          filterProjects={filterProjects}
          type='all'
        />

        {PROVINCES.map((province) => (
          <ProvinceItem
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
