import { getCurrentUser } from '@/actions/getCurrentUser';
import { EVENTS, ORGANIZATIONS, SOCIALPROJECTS } from '@/data';
import ProjectsCard, { SmallProps } from './components/projectsCards';
import AdBanner from './components/adBanner';
import WellcomeBar from './components/wellcomeBar';

const Profile = async () => {
  const currentUser = await getCurrentUser();

  const projects: SmallProps[] = SOCIALPROJECTS.map((project) => ({
    title: project.name,
    href: `projectos-sociais/${project.id}`,
    text1: project.responsibleName,
    text2: project.province,
  }));

  const organizations: SmallProps[] = ORGANIZATIONS.map((organization) => ({
    title: organization.name,
    href: `organizacoes/${organization.id}`,
    text1: organization.responsibleName,
    text2: organization.province,
  }));

  const events: SmallProps[] = EVENTS.map((event) => ({
    title: event.name,
    href: `eventos/${event.id}`,
    text2: `${event.location} - ${event.date.toLocaleDateString()}`,
  }));

  const alerts: SmallProps[] = EVENTS.map((alert) => ({
    title: alert.name,
    href: `alertas/${alert.id}`,
    text2: alert.date.toLocaleDateString(),
  }));

  return (
    <section>
      <WellcomeBar currentUser={currentUser} />
      <div className='flex flex-col mt-[30px] lg:flex-row'>
        <div className='w-full'>
          <AdBanner />
          <div className='mt-[50PX] grid md:grid-cols-2 gap-10'>
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
    </section>
  );
};

export default Profile;
