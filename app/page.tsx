import Container from './components/Container';
import SocialProjectsList from './components/socialProjectsList';
import { SOCIALPROJECTS } from '@/data/socialProjects';
import { getSocialProjects } from './actions/getSocialProjects';
import CustomButton from './components/customButton';
import Heading from './components/heading';

export default async function Home() {
  const socialProjects = await getSocialProjects();

  console.log(socialProjects);
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
              gridCols={4}
            />
            {/* <CustomButton label='Ver mais projectos' onClick={() => {}} /> */}
          </div>
          <div>
            <Heading
              title='Organizações socias mais recentes'
              subtitle='Novos projects socials'
            />
            <SocialProjectsList
              socialProjects={socialProjects}
              isFetching={false}
              gridCols={4}
            />
            {/* <CustomButton label='Ver mais projectos' onClick={() => {}} /> */}
          </div>
        </div>
      </Container>
    </main>
  );
}
