'use client';

import { SocialProjectType } from '../socialProject/type';
import SocialProject from '../socialProject';
import Spinner from '../spinner';

interface SocialProjectsListProps {
  socialProjects: SocialProjectType[];
  isFetching: boolean;
}

const SocialProjectsList: React.FC<SocialProjectsListProps> = ({
  socialProjects,
  isFetching,
}) => {
  if (isFetching)
    return (
      <div className='mt-5'>
        <Spinner color='#224099' size={20} />
      </div>
    );

  return (
    <div
      className='
        grid 
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-[30px_20px]
        mt-5
      '
    >
      {socialProjects?.map((socialProject: SocialProjectType) => (
        <SocialProject key={socialProject._id} socialProject={socialProject} />
      ))}
    </div>
  );
};

export default SocialProjectsList;
