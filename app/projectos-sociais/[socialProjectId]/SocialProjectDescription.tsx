'use client';

import Heading from '@/app/components/heading';
import { SafeSocialProject } from '@/app/types/safeSocialProject';
import Image from 'next/image';
import Sidebar from './Sidebar';
import { SafeUser } from '@/app/types/safeUser';

interface SocialProjectDescriptionProps {
  socialProject: SafeSocialProject | null;
  currentUser: SafeUser | null;
}

const SocialProjectDescription: React.FC<SocialProjectDescriptionProps> = ({
  socialProject,
  currentUser,
}) => {
  return (
    <article>
      <Heading title={socialProject?.name as string} />
      <div className='w-full h-[400px] relative mt-4 mb-5'>
        <Image
          src={socialProject?.coverImage as string}
          alt={socialProject?.name as string}
          className='object-cover rounded-[10px]'
          fill
        />
      </div>

      <div
        className='
        flex
        flex-col
        lg:mt-[50px]
        lg:flex-row
        lg:justify-between
        gap-x-10
        '
      >
        <div
          className='
          lg:w-[70%]  
          lg:border-r-[1px]
        border-borderColor
          lg:pr-[50px]'
        >
          <p className='text-textBody text-[17px] mb-10'>
            {socialProject?.description}
          </p>
        </div>
        <div className='lg:w-[30%]'>
          <Sidebar currentUser={currentUser} socialProject={socialProject} />
        </div>
      </div>
    </article>
  );
};

export default SocialProjectDescription;
