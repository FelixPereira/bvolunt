import { getCurrentUser } from '@/actions/getCurrentUser';
import HeaderTitle from '../headerTitle';
import Wrapper from './components/wrapper';
import { getUserName } from '@/utils/user';

const Profile = async () => {
  const currentUser = await getCurrentUser();
  const userName = getUserName(currentUser?.name);

  return (
    <section>
      <HeaderTitle>Olá, {userName?.firstLastName}!</HeaderTitle>
      <Wrapper currentUser={currentUser} />
    </section>
  );
};

export default Profile;
