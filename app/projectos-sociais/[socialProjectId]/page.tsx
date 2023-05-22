import Container from '@/app/components/Container';
import { getSocialProjectById } from '@/app/actions/getSocialProjectById';
import SocialProjectClient from './SocialProjectDetailClient';
import { getCurrentUser } from '@/app/actions/getCurrentUser';

interface IParams {
  socialProjectId: string;
}

const SocialProjectPage = async ({ params }: { params: IParams }) => {
  const socialProject = await getSocialProjectById(params);
  const currentUser = await getCurrentUser();

  return (
    <main className='py-[150px]'>
      <Container>
        <SocialProjectClient
          socialProject={socialProject}
          currentUser={currentUser}
        />
      </Container>
    </main>
  );
};

export default SocialProjectPage;
