'use client';

import { SafeUser } from '@/app/types/safeUser';
import SocialProjectItem from '../socialProject';
import Spinner from '../spinner';
import { SocialOrganization, SocialProject } from '@prisma/client';

interface SocialProjectsListProps {
  socialProjects?: SocialProject[];
  socialOrganization?: SocialOrganization[];
  isFetching: boolean;
  currentUser: SafeUser | null;
}

const SocialProjectsList: React.FC<SocialProjectsListProps> = ({
  socialProjects,
  isFetching,
  currentUser,
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
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-[50px_30px]
        mt-5
      `}
    >
      {socialProjects?.map((socialProject) => (
        <SocialProjectItem
          key={socialProject.id}
          socialProject={socialProject}
          currentUser={currentUser}
        />
      ))}
    </div>
  );
};

export default SocialProjectsList;
