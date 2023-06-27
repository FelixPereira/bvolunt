'use client';

import ParticipateButton from '@/app/components/participateButton';
import { SafeSocialProject } from '@/app/types/safeSocialProject';
import { SafeUser } from '@/app/types/safeUser';
import SocialProjectMetaData from './SocialProjectMetaData';
import Image from 'next/image';
import { SocialProject } from '@prisma/client';
import Map from '@/app/components/map';
import { useGetCoords } from '@/app/hooks/useGetCoords';

interface SidebarProps {
  socialProject: SafeSocialProject | null;
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

const Sidebar: React.FC<SidebarProps> = ({ socialProject, currentUser }) => {
  const coordinates = useGetCoords(socialProject?.province);
  return (
    <aside
      className='
        flex
        flex-col
        mt-[100px]
        md:flex-row-reverse
        md:justify-center 
        md:gap-x-10
        lg:flex-col
        lg:items-start
        lg:mt-0
      '
    >
      <div
        className='
          flex
          flex-col
          gap-y-5
          md:w-[30%]
          md:border-b-0
          lg:w-full
          border-b-[10px]
          border-borderColor
          lg:border-b-[10px]
          mb-10
          pb-10
        '
      >
        <strong className='text-textBody md:text-[20px]'>
          Faça parte deste projecto social, e contribua com o que for possível!
        </strong>
        <ParticipateButton
          currentUser={currentUser}
          socialProjectId={socialProject?.id}
        />
      </div>
      <div
        className='
          gap-x-5 
          md:w-[60%]
          md:border-r-[10px]
          border-borderColor
          md:pr-10
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
              socialProject &&
              socialProject[detail.description as keyof ParcialSocialProject]
            }
          />
        ))}
        <SocialProjectMetaData
          label='Participantes'
          description={socialProject?.volunteerIds.length}
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
            ${socialProject?.address}, 
            ${socialProject?.county}, 
            ${socialProject?.province}
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
