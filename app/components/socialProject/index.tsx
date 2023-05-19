'use client';

import { SocialProject } from '@prisma/client';
import CustomButton from '../customButton';
import Image from 'next/image';
import { SafeUser } from '@/app/types/safeUser';

type PartialSocialProjectType = Pick<
  SocialProject,
  'responsibleName' | 'province'
>;

interface SocialProjectProps {
  socialProject: SocialProject;
  currentUser: SafeUser | null;
}

const footerContent = [
  {
    label: 'Promotor',
    description: 'responsibleName',
  },
  {
    label: 'Província',
    description: 'province',
  },
];

const SocialProject: React.FC<SocialProjectProps> = ({
  socialProject,
  currentUser,
}) => {
  return (
    <article
      className='
        rounded-[10px]
        border-px
        decoration-none
        transition
        duration-[500ms]
        mt-[20px]
        bg-neutralLight
        hover:shadow-[0px_30px_60px_-30px_rgba(0,0,0,0.16)]
        hover:duration-[300ms]
      '
    >
      <a
        href={`/projectos-sociais/${socialProject.id}`}
        className='
          w-[90%] 
          h-[200px] 
          relative 
          block 
          mt-[-20px]
        '
      >
        <Image
          src={socialProject.coverImage as string}
          className='
            object-cover
            shadow-boxShadow-card
            rounded-[10px_20px_5px_20px]
          '
          alt={socialProject.title as string}
          fill
        />
      </a>
      <div className='w-[90%] mx-auto'>
        <div className='flex gap-x-[5px] mt-7'>
          {[1, 2, 3, 4].map((sponsor) => (
            <div key={sponsor} className='relative w-[65px] h-[35px]'>
              <Image
                className='object-cover rounded'
                src='/images/img-placeholder.jpg'
                alt='Patrocinador'
                fill
              />
            </div>
          ))}
        </div>
        <a
          className='mt-5 block'
          href={`/projectos-sociais/${socialProject.id}`}
        >
          <h3 className='text-textTitle font-bold text-[18px]'>
            {socialProject.title}
          </h3>
        </a>
        <div className='my-5'>
          {footerContent.map((content) => (
            <div
              key={content.description}
              className='
                flex
                justify-between
                items-center
                mt-[10px]
              '
            >
              <strong
                className='
                  text-title
                  text-[13px]
                '
              >
                {content.label}
              </strong>
              <p
                className={`
                  text-textBody
                  text-[13px]
                  break-all
                  font-medium
                `}
              >
                {
                  socialProject[
                    content.description as keyof PartialSocialProjectType
                  ]
                }
              </p>
            </div>
          ))}
        </div>
        {currentUser && <CustomButton label='Faça parte' onClick={() => {}} />}
      </div>
    </article>
  );
};

export default SocialProject;
