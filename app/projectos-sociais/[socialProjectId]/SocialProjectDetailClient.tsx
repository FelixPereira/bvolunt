'use client';

import { SafeSocialProject } from '@/app/types/safeSocialProject';
import { SafeUser } from '@/app/types/safeUser';
import { SocialProject } from '@prisma/client';
import Image from 'next/image';
import Heading from '@/app/components/heading';
import CustomButton from '@/app/components/customButton';
import { useGetCoords } from '@/app/hooks/useGetCoords';
import Map from '@/app/components/map/Map';

type ParcialSocialProject = Pick<
  SocialProject,
  'responsibleName' | 'totalVolunteers' | 'province'
>;

interface SocialProjectDetailClientProps {
  currentUser: SafeUser | null;
  socialProject: SafeSocialProject | null;
}

const socialProjectDetails = [
  {
    label: 'Responsável',
    description: 'responsibleName',
  },
  {
    label: 'Participantes',
    description: 'totalVolunteers',
  },
  {
    label: 'E-mail do responsável',
    description: 'contactEmail',
  },
  {
    label: 'Telefone do responsável',
    description: 'contactEmail',
  },
];

const SocialProjectDetailClient: React.FC<SocialProjectDetailClientProps> = ({
  currentUser,
  socialProject,
}) => {
  const coordinates = useGetCoords(socialProject?.province);

  return (
    <section className='w-full lg:w-[80%] xl:w-[70%] mx-auto'>
      <Heading title={socialProject?.title as string} />
      <div className='w-full h-[400px] relative'>
        <Image
          src={socialProject?.coverImage as string}
          alt={socialProject?.title as string}
          className='object-cover rounded-[10px]'
          fill
        />
      </div>
      <div className='mt-10 flex justify-between'>
        <article className='mr-[50px]'>
          <div className='mb-10 pb-10 flex flex-col gap-y-5 border-b-[10px] border-borderColor'>
            <strong className='text-textBody'>
              Faça parte deste projecto social, e contribua com o que for
              possível!
            </strong>
            <CustomButton label='Fazer parte' onClick={() => {}} />
          </div>
          {socialProjectDetails.map((detail) => (
            <div key={detail.description} className='mb-2 flex flex-col'>
              <strong className='text-[18px] text-textBody'>
                {detail.label}:
              </strong>
              <p className='text-textBody'>
                {socialProject &&
                  socialProject[
                    detail.description as keyof ParcialSocialProject
                  ]}
              </p>
            </div>
          ))}
          <div className='mb-2 flex flex-col'>
            <strong className='text-[18px] text-textBody'>Localização:</strong>
            <p className='text-textBody'>
              {`
                ${socialProject?.address}, 
                ${socialProject?.county}, 
                ${socialProject?.province}
              `}
            </p>
          </div>
          <div className='flex flex-col gap-y-[5px]'>
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
        </article>
        <article className='border-l-[1px] border-borderColor pl-[50px]'>
          <div>
            <p className='text-textBody text-[17px] mb-10'>
              {socialProject?.description}
            </p>
            <Map center={coordinates} />
          </div>
        </article>
      </div>
    </section>
  );
};

export default SocialProjectDetailClient;
