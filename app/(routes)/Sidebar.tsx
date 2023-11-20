'use client';

import MetaData from '@/(routes)/metaData';
import Image from 'next/image';
import Map from '@/components/map';
import Participate from '@/components/participate';
import { useGetCoords } from '@/hooks/useGetCoords';
import { CurrentUserData, MetaDatas, SafeUser, Sponsor } from '@/types';
import { AccountType } from '@prisma/client';

interface SidebarProps {
  id: string;
  province: string;
  typeOfData: string;
  metaDatas: MetaDatas;
  sponsors: Sponsor[];
  currentUserData: CurrentUserData | null;
}

const Sidebar: React.FC<SidebarProps> = ({
  id,
  province,
  typeOfData,
  metaDatas,
  sponsors,
  currentUserData,
}) => {
  const coordinates = useGetCoords(province);

  return (
    <aside
      className='
        flex
        flex-col
        mt-[50px]
        md:flex-row-reverse
        md:justify-between 
        md:gap-x-10
        lg:flex-col
        lg:items-start
        lg:mt-0
      '
    >
      {currentUserData?.accountType !== AccountType.ORGANIZATION && (
        <Participate
          typeOfData={typeOfData}
          currentUserData={currentUserData}
          id={id}
        />
      )}
      <div
        className='
          gap-x-5 
          md:w-[60%]
          md:border-r-[10px]
          border-borderColor
          md:pr-20
          lg:pr-0
          lg:flex-col
          lg:border-r-0
          lg:gap-0
          lg:w-full
        '
      >
        <div className='flex flex-col gap-y-[5px] mb-3'>
          <strong className='text-[20px] text-textBody'>Apoios:</strong>
          <div className='flex gap-x-[5px]'>
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className='relative overflow-hidden w-[65px] h-[35px]'
              >
                <Image
                  className='object-cover rounded'
                  src={sponsor.logoUrl && '/images/img-placeholder.jpg'}
                  alt='sponsor'
                  fill
                />
              </div>
            ))}
          </div>
        </div>

        {metaDatas.map((metaData) => (
          <MetaData
            key={metaData.label}
            label={metaData.label}
            data={metaData.data}
          />
        ))}

        <div className='mt-5'>
          <Map center={coordinates} />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
