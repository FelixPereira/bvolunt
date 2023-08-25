import { SocialProject } from '@prisma/client';
import SmallCard from './smallCard';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export type SmallProject = Pick<
  SocialProject,
  'name' | 'responsibleName' | 'province'
>;

export interface SmallProps {
  href: string;
  title: string;
  text1?: string | null;
  text2?: string;
}

interface ProjectsCardProps { 
  title: string;
  data: SmallProps[];
  url: string;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({ title, data, url }) => {
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
        {data.slice(0, 4).map((project) => (
          <SmallCard
            key={project.href}
            url={project.href}
            title={project.title}
            text1={project.text1}
            text2={project.text2}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
