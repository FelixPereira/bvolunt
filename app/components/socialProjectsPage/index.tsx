'use client';

import { SOCIALPROJECTS } from '@/data/socialProjects';
import SocialProjectsList from '../socialProjectsList';
import Sidebar from '../sidebar';
import FetchQueryDetails from '../fetchQueryDetails';
// import { useGetSocialProjects } from '../../hooks/useGetSocialProjects';

const SocialProjectsPage = () => {
  // const { isFetching, socialProjects } = useGetSocialProjects();
  return (
    <div
      className='
        w-full
        flex
        justify-between
        items-start
        gap-x-4
      '
    >
      <Sidebar />
      <div className='w-[80%]'>
        <FetchQueryDetails
          organizations={SOCIALPROJECTS}
          typeOfData='socialProjects'
          query='socialProjectQuery'
        />
        <SocialProjectsList
          socialProjects={SOCIALPROJECTS}
          isFetching={false}
          gridCols={3}
        />
      </div>
    </div>
  );
};

export default SocialProjectsPage;
