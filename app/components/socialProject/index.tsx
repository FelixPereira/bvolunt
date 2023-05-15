'use client';

import { SocialProject } from '@prisma/client';
import { SocialProjectType } from './type';
import Image from 'next/image';

type PartialSocialProjectType = Pick<
  SocialProject,
  'responsibleName' | 'province'
>;

interface SocialProjectProps {
  socialProject: SocialProject;
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

const SocialProject: React.FC<SocialProjectProps> = ({ socialProject }) => {
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
      <a href={`/projectos-sociais/${socialProject.id}`}>
        <div
          className={`
            bg-[url('/images/socialProjects/aprendizes-do-bem.jpg')]
            bg-cover
            bg-center
            bg-no-repeat
            w-[90%]
            h-[180px]
            rounded-[10px_20px_5px_20px]
            mt-[-20px]
            shadow-boxShadow-card
          `}
        />
      </a>
      <div className='px-5 pb-5'>
        <div className=''>
          <div className='flex gap-x-[5px] mt-[30px]'>
            {socialProject.gallery?.map((sponsor) => (
              <Image
                className='
                  w-[50px]
                  h-[30px]
                  object-fill
                  rounded
                '
                key={sponsor}
                src={sponsor}
                alt='Patrocinador'
                width={50}
                height={50}
              />
            ))}
          </div>
          <a
            className='mt-5 block'
            href={`/projectos-sociais/${socialProject.id}`}
          >
            <h3 className='text-textTitle font-bold text-20'>{socialProject.title}</h3>
          </a>
        </div>
        <div className='boder-t-[2px] border-t-neutralGray'>
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
              <p
                className='
                  text-textBody
                  text-[13px]
                  font-bold
                '
              >
                {content.label}
              </p>
              <p
                className={`
                  text-textTitle
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
      </div>
    </article>
  );
};

export default SocialProject;
