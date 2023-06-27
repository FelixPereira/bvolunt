'use client';

import Image from 'next/image';
import Link from 'next/link';
import ParticipateButton from '../../participateButton';
import { SafeUser } from '@/app/types/safeUser';
import { usePathname } from 'next/navigation';
import { SocialOrganization, SocialProject } from '@prisma/client';

interface BaseCardProps {
  data: SocialOrganization | SocialProject;
  currentUser: SafeUser | null;
  typeOfData: string;
}

const BaseCard: React.FC<BaseCardProps> = ({ data, currentUser, typeOfData }) => {
  const pathName = usePathname();
  const currentPathName = '/';

  const { id, coverImage, province, responsibleName, name } = data;

  const extraInfo = [
    { label: 'Responsável', description: responsibleName },
    { label: 'Província', description: province },
  ];

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
        min-h-[450px]
      '
    >
      <Link
        href={`${typeOfData}/${id}`}
        className='
          w-[90%] 
          h-[40%] 
          relative 
          block 
          mt-[-20px]
        '
      >
        <Image
          src={coverImage}
          alt={name}
          fill
          sizes=''
          className='
            object-cover
            shadow-boxShadow-Basecard
            rounded-[10px_20px_5px_20px]
          '
        />
      </Link>
      <div
        className='
          w-[90%]
          h-[60%] 
          mx-auto
          mb-15
          flex
          flex-col
          justify-between
        '
      >
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
        <a className='mt-5 block' href={`${pathName}/${id}`}>
          <h3 className='text-textTitle font-bold text-[18px]'>{name}</h3>
        </a>
        <div className='mt-2 mb-5'>
          {extraInfo.map((info) => (
            <div
              key={info.label}
              className='
              flex
              justify-between
              items-center
              mt-[10px]
            '
            >
              <strong className='text-title text-[13px]'>{info.label}</strong>
              <p
                className={`
                  text-textBody
                  text-[13px]
                  break-all
                  font-medium
                `}
              >
                {info.description}
              </p>
            </div>
          ))}
        </div>
        <ParticipateButton currentUser={currentUser} socialProjectId={id} />
      </div>
    </article>
  );
};

export default BaseCard;
