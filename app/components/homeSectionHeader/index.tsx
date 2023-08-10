'use client';

import CustomButton from '@/components/customButton';
import Heading from '@/components/heading';

import { useRouter } from 'next/navigation';

interface HeaderSectionPrpos {
  typeOfData: string;
}

const HomeHeaderSection: React.FC<HeaderSectionPrpos> = ({ typeOfData }) => {
  const router = useRouter();

  const message = typeOfData === 'projects' ? 'Projectos' : 'Organizações';
  const url =
    typeOfData === 'projects' ? 'projectos-sociais' : 'organizacoes-sociais';

  return (
    <div className='flex items-center gap-y-2 justify-between'>
      <div className='w-[80%]'>
        <Heading
          title={`${message}`}
          subtitle={`${message} sociais adicionados recentemente`}
        />
      </div>
      <CustomButton label='Ver mais' onClick={() => router.push(url)} />
    </div>
  );
};

export default HomeHeaderSection;
