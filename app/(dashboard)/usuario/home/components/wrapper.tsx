'use client';

import { useMemo } from 'react';
import ProjectsCard from './projectsCards';
import AdBanner from './adBanner';
import { useMakeData } from '@/hooks/makeData';

interface WrapperProps {
  currentUser: any;
}

const Wrapper: React.FC<WrapperProps> = ({ currentUser }) => {
  const projects = useMemo(() => {
    return currentUser?.socialProjects.map((project) => ({
      title: project.name,
      href: `projectos-sociais/${project.id}`,
      text1: project.responsibleName,
      text2: project.province,
    }));
  }, [currentUser?.socialProjects]);

  const organizations = useMemo(() => {
    return currentUser?.socialOrganizations.map((organization) => ({
      title: organization.name,
      href: `organizacoes/${organization.id}`,
      text1: organization.responsibleName,
      text2: organization.province,
    }));
  }, [currentUser?.socialOrganizations]);

  const events = useMemo(() => {
    return currentUser?.events.map((event) => ({
      title: event.name,
      href: `eventos/${event.id}`,
      text2: `${event.location} - ${event.date.toLocaleDateString()}`,
    }));
  }, [currentUser?.events]);

  const alerts = useMemo(() => {
    return currentUser?.events.map((alert) => ({
      title: alert.name,
      href: `alertas/${alert.id}`,
      text2: alert.date.toLocaleDateString(),
    }));
  }, [currentUser?.events]);

  // const projects = useMakeData({
  //   datas: currentUser.socialProjects,
  //   title: 'name',
  //   href: `projectos-sociais`,
  //   text1: 'responsibleName',
  //   text2: 'province',
  // });

  // const organizations = useMakeData({
  //   datas: currentUser.socialOrganizations,
  //   title: 'name',
  //   href: 'organizacoes',
  //   text1: 'responsibleName',
  //   text2: 'province',
  // });

  // const events = useMakeData({
  //   datas: currentUser.events,
  //   title: 'name',
  //   href: 'eventos',
  //   text2: 'location',
  // });

  // const alerts = useMakeData({
  //   datas: currentUser.events,
  //   title: 'name',
  //   href: 'alertas',
  //   text2: 'date',
  // });

  console.log('PAGE DATA: ', alerts);
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
          <ProjectsCard
            url='/usuario/projectos'
            data={projects}
            title='Projectos'
          />
          <ProjectsCard
            url='/usuario/organizacoes'
            data={organizations}
            title='Organizações'
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
        <ProjectsCard url='/usuario/eventos' data={events} title='Eventos' />
        <ProjectsCard url='/usuario/alertas' data={alerts} title='Alertas' />
      </div>
    </div>
  );
};

export default Wrapper;
