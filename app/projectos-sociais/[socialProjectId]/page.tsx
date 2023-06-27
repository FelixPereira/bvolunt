import { getSocialProjectById } from '@/app/actions/getSocialProjectById';
import { getCurrentUser } from '@/app/actions/getCurrentUser';
import Sidebar from './Sidebar';
import SocialProjectDescription from './SocialProjectDescription';
import Container from '@/app/components/Container';

interface IParams {
  socialProjectId: string;
}

const SocialProjectPage = async ({ params }: { params: IParams }) => {
  const socialProject = await getSocialProjectById(params);
  const currentUser = await getCurrentUser();

  return (
    <main>
      <Container>
        <div
          className='
            lg:w-[1000px]
            mx-auto
            flex
            flex-col-reverse
            lg:flex-row
            lg:items-start
          '
        >
          <SocialProjectDescription socialProject={socialProject} currentUser={currentUser} />
        </div>
      </Container>
    </main>
  );
};

export default SocialProjectPage;
