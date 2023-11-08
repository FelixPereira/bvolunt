import { getCurrentUser } from '@/actions/getCurrentUser';
import { getUserDashboardData } from '@/actions/getUserDashboardData';
import { getUserName } from '@/utils';
import MainContentWrapper from './components/MainContentWrapper';
import Heading from '@/components/heading';
import HorizontalRow from '@/components/HorizontalRow';

const UserHomePage = async () => {
  const currentUser = await getCurrentUser();

  const { events, socialOrgs, socialProjects } = await getUserDashboardData(
    currentUser?.id
  );
  const userName = getUserName(currentUser?.name);

  return (
    <section>
      <Heading title={`Olá, ${userName?.firstLastName}!`} />
      <HorizontalRow />
      <MainContentWrapper
        socialOrganizations={socialOrgs}
        socialProjects={socialProjects}
        events={events}
      />
    </section>
  );
};

export default UserHomePage;
