'use client';

import { PROVINCES } from '@/app/data/provinces';
import { useSearchParams } from 'next/navigation';
import ProvinceItem from './provinceItem/ProvinceItem';
import { formatToLowerCased } from '@/app/utils';
import { useMemo } from 'react';
import Heading from '../heading';

const Sidebar = () => {
  const params = useSearchParams();
  const currentProvince = useMemo(() => {
    let province;
    if (params) {
      province = params.get('province');
      if (!province) return null;

      return province;
    }
  }, [params]);

  return (
    <aside className='lg:w-[20%]'>
      <Heading
        title='Pesquisar por província'
        subtitle='Veja os projectos de uma província'
      />
      <ul className='flex flex-wrap gap-x-2 lg:flex-col mt-6'>
        {PROVINCES.map((province) => (
          <ProvinceItem
            key={province.name}
            label={province.name}
            selected={currentProvince === formatToLowerCased(province.name)}
            slug={formatToLowerCased(province.name)}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
