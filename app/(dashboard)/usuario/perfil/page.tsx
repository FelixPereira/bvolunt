import { getCurrentUser } from '@/actions';
import HorizontalRow from '@/components/HorizontalRow';
import Heading from '@/components/heading';
import { getUserName } from '@/utils';

const ProfilePage = async () => {
  const currentUser = await getCurrentUser();
  const userName = getUserName(currentUser?.name);

  return (
    <div>
      <Heading
        title={`Pode ver e alterar os dados de: ${userName?.firstLastName}`}
      />
      <HorizontalRow />
    </div>
  );
};

export default ProfilePage;
