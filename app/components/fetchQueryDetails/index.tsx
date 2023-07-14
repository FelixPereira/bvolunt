'use client';

import { useMemo } from 'react';
import { getQueryDescription, formatToCapitalized } from '../../utils';
import Heading from '../heading';
import { SocialProject, SocialOrganization } from '@prisma/client';
import { useSearchParams, usePathname } from 'next/navigation';
import Orderby from './OrderBy';

interface FetchQueryDetailsProps {
  data: SocialOrganization[] | SocialProject[];
  typeOfData: string;
}

const QueryDetails: React.FC<FetchQueryDetailsProps> = ({
  data,
  typeOfData,
}) => {
  const queryDescritpion = getQueryDescription(typeOfData, data);
  const searchParams = useSearchParams();
  const currentProvince = useMemo(() => {
    const province = searchParams?.get('provincia');
    if (!province) return 'Todas';

    return formatToCapitalized(province);
  }, [searchParams]);

  return (
    <div className='flex justify-between w-full'>
      <Heading
        title={`Provincia: ${currentProvince}`}
        subtitle={queryDescritpion}
      />

      <Orderby />
    </div>
  );
};

export default QueryDetails;
