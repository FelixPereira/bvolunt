'use client';

import { useMemo } from 'react';
import { SafeEvent, SafeSocialOrg, SafeSocialProject } from '@/types';
import AdBanner from './AdsBanner';
import SmallCard from './smallCard';

interface WrapperProps {
  currentUser: any;
}

const Wrapper: React.FC<WrapperProps> = ({ currentUser }) => {
  const projects = useMemo(() => {
    return currentUser?.socialProjects?.map((project: SafeSocialProject) => ({
      title: project.name,
      href: `projectos-sociais/${project.id}`,
      primaryText: 'project.socialOrganizationId',
      secondaryText: project.province,
    }));
  }, [currentUser?.socialProjects]);

  const organizations = useMemo(() => {
    return currentUser?.socialOrganizations?.map(
      (organization: SafeSocialOrg) => ({
        title: organization.name,
        href: `organizacoes/${organization.id}`,
        primaryText: organization.responsibleName,
        secondaryText: organization.province,
      })
    );
  }, [currentUser?.socialOrganizations]);

  const events = useMemo(() => {
    return currentUser?.events?.map((event: SafeEvent) => ({
      title: event.title,
      href: `eventos/${event.id}`,
      secondaryText: `${
        event.location
      } - ${event.startDate?.toLocaleDateString()}`,
    }));
  }, [currentUser?.events]);

  // const alerts = useMemo(() => {
  //   return currentUser?.events.map((alert) => ({
  //     title: alert.name,
  //     href: `alertas/${alert.id}`,
  //     secondaryText: alert.date.toLocaleDateString(),
  //   }));
  // }, [currentUser?.events]);

  return (
    <div
      className='
        flex
        flex-col
        mt-[30px]
        lg:flex-row
      '
    >
      <div className='w-full'>
        <AdBanner />
        <div
          className='
            mt-[50PX]
            grid
            md:grid-cols-2
            gap-10
          '
        >
          <SmallCard
            url='/usuario/projectos'
            data={projects}
            typeOfData='socialProjects'
          />
          <SmallCard
            url='/usuario/organizacoes'
            data={organizations}
            typeOfData='socialOrganizations'
          />
        </div>
      </div>
      <div
        className='
          grid
          md:grid-cols-2
          lg:grid-cols-1
          gap-10
          w-full
          lg:w-[40%]
          mt-5
          lg:mt-0
          lg:border-l
          border-primary
          lg:pl-5 lg:ml-5
        '
      >
        <SmallCard url='/usuario/eventos' data={events} typeOfData='events' />
        {/* <ProjectsCard url='/usuario/alertas' data={alerts} title='Alertas' /> */}
      </div>
    </div>
  );
};

export default Wrapper;
