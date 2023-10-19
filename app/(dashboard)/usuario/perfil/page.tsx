import HorizontalRow from '@/components/HorizontalRow';
import UpdateProfileForm from '@/components/form/updateUser';
import Heading from '@/components/heading';
import { getCurrentUser } from '@/actions';
import { getUserName } from '@/utils';

const ProfilePage = async () => {
  const currentUser = await getCurrentUser();
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
