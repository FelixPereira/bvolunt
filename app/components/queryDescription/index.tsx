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
  totalStoredData: number;
}

const QueryDescription: React.FC<QueryDescriptionProps> = ({
  data,
  typeOfData,
  totalStoredData,
}) => {
  const queryDescritpion = getQueryDescription(
    typeOfData,
    totalStoredData,
    data
  );
  const searchParams = useSearchParams();
  const currentProvince = useMemo(() => {
    const province = searchParams?.get('provincia');
    if (!province) return 'Todas';

    return formatToCapitalized(province);
  }, [searchParams]);

  return (
    <div className='flex justify-between items-center w-full'>
      <Heading
        title={`Província: ${currentProvince}`}
        subtitle={queryDescritpion}
      />

      <Orderby />
    </div>
  );
};

export default QueryDescription;
