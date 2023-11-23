import HorizontalRow from '@/components/HorizontalRow';
import Heading from '@/components/heading';
import { getCurrentUser, getUser } from '@/actions';
import { getUserName } from '@/utils';
import UpdateProfileForm from '@/components/form/updateUser';

const ProfilePage = async () => {
  const loggedInUser = await getCurrentUser();
  const currentUser = await getUser(loggedInUser?.email);
  const userName = getUserName(currentUser?.name);

  return (
    <section>
      <Heading
        title={`Pode ver e alterar os dados de: ${userName?.firstLastName}`}
      />
      <HorizontalRow />
      <UpdateProfileForm currentUser={currentUser} />
    </section>
  );
};

export default ProfilePage;
