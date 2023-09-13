import SmallCardsList from './SmallCardsList';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { getQueryDescription } from '@/utils';

export interface SmallProps {
  href: string;
  title: string;
  primaryText?: string | null;
  secondaryText?: string;
}

interface SmallCardProps {
  typeOfData: string;
  data?: SmallProps[];
  url: string;
}

const SmallCard: React.FC<SmallCardProps> = ({ typeOfData, data, url }) => {
  const description = getQueryDescription(typeOfData, data);
  let title;

  switch (typeOfData) {
    case 'socialOrganizations':
      title = 'Organizações';
      break;
    case 'socialProjects':
      title = 'Projectos';
      break;
    case 'socialOrganizations':
      title = 'Organizações';
      break;
    default:
      title = 'Eventos';
  }

  return (
    <div>
      <div className='flex items-center justify-between mb-5'>
        <h3 className='font-bold text-[20px]'>{title}</h3>
        <Link
          href={url}
          className='flex items-center gap-y-3 font-bold text-[13px] text-textBody hover:text-primary'
        >
          Ver mais
          <ChevronRight />
        </Link>
      </div>
      <div className='grid grid-cols-1 gap-4'>
        {data?.length
          ? data
              ?.slice(0, 4)
              .map((project) => (
                <SmallCardsList
                  key={project.href}
                  url={project.href}
                  title={project.title}
                  primaryText={project.primaryText}
                  secondaryText={project.secondaryText}
                />
              ))
          : description}
      </div>
    </div>
  );
};

export default SmallCard;
