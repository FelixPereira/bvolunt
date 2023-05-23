'use client';

import SocialProjectItem from '../components/socialProject';
import QueryDetails from '../components/fetchQueryDetails';
import { SafeUser } from '../types/safeUser';
import { SocialProject } from '@prisma/client';

interface SocialProjectClientProps {
  socialProjects: SocialProject[];
  currentUser: SafeUser | null;
}

const SocialProjectClient: React.FC<SocialProjectClientProps> = ({
  socialProjects,
  currentUser,
}) => {
  return (
    <div className='lg:w-[80%]'>
      <QueryDetails data={socialProjects} typeOfData='socialProject' />

      <div
        className='
        grid 
        md:grid-cols-2
        lg:grid-cols-3
        2xl:grid-cols-4
        gap-[50px_20px]
        mt-5
      '
      >
        {socialProjects.map((socialProject) => (
          <SocialProjectItem
            key={socialProject.id}
            socialProject={socialProject}
            currentUser={currentUser}
          />
        ))}
      </div>
    </div>
  );
};

export default SocialProjectClient;
