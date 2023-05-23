'use client';

import { useMemo, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { setOrder } from '../../redux/features/organizationQuerySlice';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getQueryDescription, formatToCapitalized } from '../../utils';
import { OrganizationType } from '../../types-old';
import Heading from '../heading';
import { SocialProject } from '@prisma/client';
import { useSearchParams, usePathname } from 'next/navigation';
import OrderBy from './OrderBy';

interface FetchQueryDetailsProps {
  data: OrganizationType[] | SocialProject[];
  typeOfData: string;
  // query: string;
}

const QueryDetails: React.FC<FetchQueryDetailsProps> = ({
  data,
  typeOfData,
  // query,
}) => {
  const queryDescritpion = getQueryDescription(typeOfData, data);
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const currentProvince = useMemo(() => {
    const province = searchParams?.get('province');
    if (!province) return 'Todas';

    return formatToCapitalized(province);
  }, [searchParams]);

  return (
    <div className='flex justify-between w-full'>
      <Heading
        title={`Provincia: ${currentProvince}`}
        subtitle={queryDescritpion}
      />

      <OrderBy />
    </div>
  );
};

export default QueryDetails;
