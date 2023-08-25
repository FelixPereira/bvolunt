'use client';

import ParticipateButton from '@/components/participateBtns/participateOnProjectBtn';
import { SafeSocialProject } from '@/types/safeSocialProject';
import { SafeUser } from '@/types/safeUser';
import SocialProjectMetaData from '@/(routes)/metaData';
import Image from 'next/image';
import { SocialProject } from '@prisma/client';
import Map from '@/components/map';
import { useGetCoords } from '@/hooks/useGetCoords';
import { SafeSocialOrg } from '@/types/safeSocialOrg';
import Participate from '@/components/participate';

interface SidebarProps {
  data?: SafeSocialProject | SafeSocialOrg;
  typeOfData: string;
  currentUser: SafeUser | null;
}

type ParcialSocialProject = Pick<SocialProject, 'responsibleName' | 'province'>;

const SocialProjectMetaDatas = [
  {
    label: 'Responsável',
    description: 'responsibleName',
  },
  {
    label: 'E-mail do responsável',
    description: 'responsibleEmail',
  },
  {
    label: 'Telefone do responsável',
    description: 'responsiblePhone',
  },
];

const Sidebar: React.FC<SidebarProps> = ({ data, currentUser, typeOfData }) => {
  const coordinates = useGetCoords(data?.province);
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
      <Participate
        typeOfData={typeOfData}
        currentUser={currentUser}
        id={data?.id}
      />
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
        {SocialProjectMetaDatas.map((detail) => (
          <SocialProjectMetaData
            key={detail.description}
            label={detail.label}
            description={
              data && data[detail.description as keyof ParcialSocialProject]
            }
          />
        ))}
        <SocialProjectMetaData
          label='Participantes'
          description={data?.volunteerIDs.length}
        />

        <div className='flex flex-col gap-y-[5px] mb-3'>
          <strong className='text-[20px] text-textBody'>Apoios:</strong>
          <div className='flex gap-x-[5px]'>
            {[1, 2, 4].map((logo) => (
              <div key={logo} className='relative w-[65px] h-[35px]'>
                <Image
                  className='object-cover rounded'
                  src='/images/img-placeholder.jpg'
                  alt='sponsor'
                  fill
                />
              </div>
            ))}
          </div>
        </div>

        <SocialProjectMetaData
          label='Localização'
          description={`
            ${data?.address}, 
            ${data?.county}, 
            ${data?.province}
          `}
        />

        <div className='mt-5'>
          <Map center={coordinates} />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
