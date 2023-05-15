'use client';

import { SocialProjectType } from '../socialProject/type';
import SocialProjectItem from '../socialProject';
import Spinner from '../spinner';
import { SocialProject } from '@prisma/client';

interface SocialProjectsListProps {
  socialProjects: SocialProject[];
  isFetching: boolean;
  gridCols: number;
}

const SocialProjectsList: React.FC<SocialProjectsListProps> = ({
  socialProjects,
  isFetching,
  gridCols,
}) => {
  if (isFetching)
    return (
      <div className='mt-5'>
        <Spinner color='#224099' size={20} />
      </div>
    );

  return (
    <div
      className={`
        grid 
        grid-cols-${gridCols - 3}
        md:grid-cols-${gridCols - 2}
        lg:grid-cols-${gridCols - 1}
        xl:grid-cols-${gridCols}
        gap-[30px_20px]
        mt-5
      `}
    >
      {socialProjects?.map((socialProject) => (
        <>
          <SocialProjectItem
            key={socialProject.id}
            socialProject={socialProject}
          />
          <SocialProjectItem
            key={socialProject.id}
            socialProject={socialProject}
          />
          <SocialProjectItem
            key={socialProject.id}
            socialProject={socialProject}
          />
          <SocialProjectItem
            key={socialProject.id}
            socialProject={socialProject}
          />
        </>
      ))}
    </div>
  );
};

export default SocialProjectsList;
