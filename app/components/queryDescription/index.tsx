'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { getQueryDescription, formatToCapitalized } from '@/utils';
import { SocialProject, SocialOrganization } from '@prisma/client';
import Heading from '@/components/heading';
import Orderby from '@/components/queryDescription/orderby';

interface QueryDescriptionProps {
  data: SocialOrganization[] | SocialProject[];
  typeOfData: string;
}

const QueryDescription: React.FC<QueryDescriptionProps> = ({
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
    <div className='flex justify-between items-center w-full'>
      <Heading
        title={`Provincia: ${currentProvince}`}
        subtitle={queryDescritpion}
      />

      <Orderby />
    </div>
  );
};

export default QueryDescription;
