'use client';

import Heading from '@/components/heading';
import { SafeSocialProject } from '@/types/safeSocialProject';
import Image from 'next/image';
import Sidebar from '@/(routes)/Sidebar';
import { SafeUser } from '@/types/safeUser';
import { SafeSocialOrg } from '@/types/safeSocialOrg';

interface DescriptionProps {
  data?: SafeSocialProject | SafeSocialOrg;
  currentUser: SafeUser | null;
  typeOfData: string;
}

const Description: React.FC<DescriptionProps> = ({ data, currentUser, typeOfData }) => {
  return (
    <article>
      <Heading title={data?.name as string} />
      <div className='w-full h-[400px] relative mt-4 mb-5'>
        <Image
          src={data?.coverImage as string}
          alt={data?.name as string}
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
          <p className='text-textBody text-[17px] mb-10'>{data?.description}</p>
        </div>
        <div className='lg:w-[30%]'>
          <Sidebar typeOfData={typeOfData} currentUser={currentUser} data={data} />
        </div>
      </div>
    </article>
  );
};

export default Description;
