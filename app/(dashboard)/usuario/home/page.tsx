import { getCurrentUser } from '@/actions/getCurrentUser';
import { getUserName } from '@/utils';
import HeaderTitle from '../../components/HeaderTitle';
import MainContentWrapper from './components/MainContentWrapper';

const DashboardHomePage = async () => {
  const currentUser = await getCurrentUser();
  const userName = getUserName(currentUser?.name);

  return (
    <section>
      <HeaderTitle>Olá, {userName?.firstLastName}!</HeaderTitle>
      <MainContentWrapper currentUser={currentUser} />
    </section>
  );
};

export default DashboardHomePage;
