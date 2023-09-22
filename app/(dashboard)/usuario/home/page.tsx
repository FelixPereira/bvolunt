import { getCurrentUser } from '@/actions/getCurrentUser';
import { getUserName } from '@/utils';
import MainContentWrapper from './components/MainContentWrapper';
import Heading from '@/components/heading';
import HorizontalRow from '@/components/HorizontalRow';

const DashboardHomePage = async () => {
  const currentUser = await getCurrentUser();
  const userName = getUserName(currentUser?.name);

  return (
    <section>
      <Heading title={`Olá, ${userName?.firstLastName}!`} />
      <HorizontalRow />
      <MainContentWrapper
        socialOrganizations={currentUser?.socialOrganizations}
        socialProjects={currentUser?.socialProjects}
        events={currentUser?.events}
      />
    </section>
  );
};

export default DashboardHomePage;
