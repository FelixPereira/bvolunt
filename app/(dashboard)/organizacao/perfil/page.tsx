import { getCurrentUser } from '@/actions';
import { getOrg } from '@/actions/getOrg';
import HorizontalRow from '@/components/HorizontalRow';
import Heading from '@/components/heading';
import ProfileWrapper from '@/(dashboard)/_components/profileWrapper';
import UpdateOrgForm from '@/components/form/updateOrg/UpdateOrgForm';

const ProfilePage = async () => {
  const loggedInOrg = await getCurrentUser();
  const currentOrg = await getOrg(loggedInOrg?.email);

  return (
    <section>
      <Heading title={`Pode ver e editar o perfil de: ${currentOrg?.name}`} />
      <HorizontalRow />
      <ProfileWrapper>
        <UpdateOrgForm currentOrg={currentOrg} />
      </ProfileWrapper>
    </section>
  );
};

export default ProfilePage;
