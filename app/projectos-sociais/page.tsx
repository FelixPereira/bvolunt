import { getSocialProjects } from '@/app/actions/getSocialProjects';
import BaseCard from '@/app/components/cards/baseCard';
import CardsList from '@/app/components/cards/cardsList';
import PagesContainer from '@/app/components/pageContainer';
import { getCurrentUser } from '@/app/actions/getCurrentUser';
import Sidebar from '@/app/components/sidebar';
import Container from '../components/Container';
import { getTotalProjects } from '../actions/getTotalProjectByProvince';
import { Suspense } from 'react';
import Loading from '../loading';

interface IParams {
  province: string;
  orderby: string;
}

const SocialProjectsPage = async ({
  searchParams,
}: {
  searchParams: IParams;
}) => {
  const socialProjects = await getSocialProjects(searchParams);
  const unfilteredSocialProjects = await getTotalProjects();
  const currentUser = await getCurrentUser();

  return (
    <main>
      <Container>
        <div className='flex flex-col lg:flex-row gap-x-5'>
          <Sidebar data={unfilteredSocialProjects} />

          <PagesContainer data={socialProjects} typeOfData='socialProjects'>
            <CardsList>
              {socialProjects.map((socialProject) => (
                <BaseCard
                  key={socialProject.id}
                  currentUser={currentUser}
                  data={socialProject}
                  typeOfData='projectos-sociais'
                />
              ))}
            </CardsList>
          </PagesContainer>
        </div>
      </Container>
    </main>
  );
};

export default SocialProjectsPage;
