'use client';

import { useMemo } from 'react';
import { SafeSocialOrg } from '@/types';
import { formatDate } from '@/utils';
import { Event } from '@prisma/client';
import AdBanner from './AdsBanner';
import SmallCard from './smallCard';

interface WrapperProps {
  socialOrganizations: any;
  socialProjects: any;
  events?: Event[];
}

const Wrapper: React.FC<WrapperProps> = ({
  socialProjects,
  socialOrganizations,
  events,
}) => {
  const projects = useMemo(() => {
    return socialProjects?.map((project: any) => ({
      title: project.name,
      href: `/projectos-sociais/${project.id}`,
      primaryText: project.socialOrganization?.name,
      secondaryText: `${project.county}, ${project.province}`,
    }));
  }, [socialProjects]);

  const organizations = useMemo(() => {
    return socialOrganizations?.map((organization: SafeSocialOrg) => ({
      title: organization.name,
      href: `/organizacoes/${organization.id}`,
      primaryText: organization.responsibleName,
      secondaryText: `${organization.county}, ${organization.province}`,
    }));
  }, [socialOrganizations]);

  const allEvents = useMemo(() => {
    return events?.map((event) => ({
      title: event.title,
      href: `/eventos/${event.id}`,
      primaryText: `${event.address}, ${event.county} - ${event.province}`,
      secondaryText: `${formatDate(event.startDate)} - ${formatDate(
        event.endDate
      )}`,
    }));
  }, [events]);

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
            gap-5
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
        <SmallCard
          url='/usuario/eventos'
          data={allEvents}
          typeOfData='events'
        />
      </div>
    </div>
  );
};

export default Wrapper;
