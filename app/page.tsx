import Container from './components/Container';
import SocialProjectsList from './components/socialProjectsList';
// import { SOCIALPROJECTS } from '@/data/socialProjects';
import { getSocialProjects } from './actions/getSocialProjects';
import Heading from './components/heading';
import { getCurrentUser } from './actions/getCurrentUser';

export default async function Home() {
  const socialProjects = await getSocialProjects();
  const currentUser = await getCurrentUser();

  return (
    <main className='py-[150px]'>
      <Container>
        <div>
          <div className='mb-10'>
            <Heading
              title='Projectos socias mais recentes'
              subtitle='Novos projects socials'
            />
            <SocialProjectsList
              socialProjects={socialProjects}
              isFetching={false}
              currentUser={currentUser}
            />
          </div>
          <div>
            <Heading
              title='Organizações socias mais recentes'
              subtitle='Novos projects socials'
            />
            <SocialProjectsList
              socialProjects={socialProjects}
              isFetching={false}
              currentUser={currentUser}
            />
          </div>
        </div>
      </Container>
    </main>
  );
}
