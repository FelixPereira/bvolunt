import { getCurrentUser } from '@/actions';
import { getOrg } from '@/actions/getOrg';
import { getUserName } from '@/utils';
import HorizontalRow from '@/components/HorizontalRow';
import UpdateOrgProfileForm from '@/components/form/updateOrg';
import Heading from '@/components/heading';

const ProfilePage = async () => {
  const loggedInOrg = await getCurrentUser();
  const currentOrg = await getOrg(loggedInOrg?.email);

  return (
    <section>
      <Heading title={`Pode ver e editar o perfil de: ${currentOrg?.name}`} />
      <HorizontalRow />
      <UpdateOrgProfileForm currentOrg={currentOrg} />
    </section>
  );
};

export default ProfilePage;
