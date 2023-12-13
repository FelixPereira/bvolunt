import HorizontalRow from '@/components/HorizontalRow';
import Heading from '@/components/heading';
import { getCurrentUser, getUser } from '@/actions';
import { getUserName } from '@/utils';
import ProfileWrapper from '@/(dashboard)/_components/profileWrapper';
import DeleteAccount from '@/(dashboard)/_components/deleteAccount';
import UpdateUserForm from '@/components/form/updateUser/UpdateUserForm';

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

      <ProfileWrapper>
        <UpdateUserForm currentUser={currentUser} />
      </ProfileWrapper>

      <DeleteAccount url='/user/delete' />
    </section>
  );
};

export default ProfilePage;
