'use client';

import Heading from '@/components/heading';
import Image from 'next/image';
import Sidebar from '@/(routes)/Sidebar';
import {
  SafeSocialOrg,
  SafeSocialProject,
  Sponsor,
  MetaDatas,
  CurrentUserData,
} from '@/types';

interface DescriptionProps {
  data: SafeSocialProject | SafeSocialOrg;
  typeOfData: string;
  metaDatas: MetaDatas;
  sponsors: Sponsor[];
  currentUserData: CurrentUserData | null;
}

const Description: React.FC<DescriptionProps> = ({
  data,
  typeOfData,
  metaDatas,
  sponsors,
  currentUserData,
}) => {
  const { id, name, province, coverImage, description } = data;

  return (
    <article>
      <Heading title={name} />
      <div className='w-full h-[400px] relative mt-4 mb-5'>
        <Image
          src={coverImage as string}
          alt={name}
          className='object-cover rounded-[10px]'
          fill
          priority
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
          <p className='text-textBody text-[17px] mb-10'>{description}</p>
        </div>
        <div className='lg:w-[30%]'>
          <Sidebar
            typeOfData={typeOfData}
            currentUserData={currentUserData}
            id={id}
            province={province}
            metaDatas={metaDatas}
            sponsors={sponsors}
          />
        </div>
      </div>
    </article>
  );
};

export default Description;
