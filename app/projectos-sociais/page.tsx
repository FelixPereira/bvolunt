import { getCurrentUser } from '../actions/getCurrentUser';
import { getProjectsByProvince } from '../actions/getProjectByProvince';
import { getSocialProjects } from '../actions/getSocialProjects';
import Container from '../components/Container';
import Sidebar from '../components/sidebar';
import { SafeUser } from '../types/safeUser';
import SocialProjectClient from './socialProjectClient';

const SocialProjectsPage = async (paramas: any) => {
  const socialProjects = await getSocialProjects(paramas);
  const currentUser = await getCurrentUser();

  const n = await getProjectsByProvince('');

  return (
    <main className='py-[150px]'>
      <Container>
        <div className='flex flex-col lg:flex-row gap-0'>
          <Sidebar />
          <SocialProjectClient
            socialProjects={socialProjects}
            currentUser={currentUser as SafeUser}
          />
        </div>
      </Container>
    </main>
  );
};

export default SocialProjectsPage;
