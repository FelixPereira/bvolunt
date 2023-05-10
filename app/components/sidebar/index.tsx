'use client';

import { PROVINCES } from '@/data/provinces';
import { useSearchParams } from 'next/navigation';

import ProvinceItem from './ProvinceItem';
import { useMemo } from 'react';

const Sidebar = () => {
  const params = useSearchParams();
  const currentProvince = useMemo(() => {
    let province;
    if (params) {
      province = params.get('province');
      if (!province) {
        return undefined;
      }
      return province;
    }
  }, [params]);

  // const getTotalOrganizations = (province: string) => {
  //   // const { data: organizations } =
  //   //   // useGetOrganizationsByProvinceQuery(province);
  //   // return organizations?.length;
  // };

  const nameToLowercase = (name: string) => {
    return name.split(' ').join('-').toLowerCase();
  };

  return (
    <aside className='w-[20%] h-full'>
      <h3
        className={`
          mb-[25px]
          text-textTitle
          text-[20px]
          font-bold
        `}
      >
        Pesquisar por província
      </h3>
      <ul>
        {PROVINCES.map((province) => (
          <ProvinceItem
            key={province.name}
            label={province.name}
            selected={currentProvince === nameToLowercase(province.name)}
            slug={province.slug}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
