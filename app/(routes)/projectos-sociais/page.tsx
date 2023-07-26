import { getSocialProjects } from '@/app/actions/getSocialProjects';
import BaseCard from '@/app/components/cards/baseCard';
import CardsList from '@/app/components/cards/cardsList';
import PagesContainer from '@/app/components/pageWrapper';
import { getCurrentUser } from '@/app/actions/getCurrentUser';
import Sidebar from '@/app/components/sidebar';
import Container from '@/app/components/Container';
import { getUnfilteredProjects } from '@/app/actions/getUnfilteredProjects';

interface IParams {
  provincia: string;
  ordenar: string;
}

const SocialProjectsPage = async ({
  searchParams,
}: {
  searchParams: IParams;
}) => {
  const socialProjects = await getSocialProjects(searchParams);
  const unfilteredProjects = await getUnfilteredProjects();
  const currentUser = await getCurrentUser();

  return (
    <main>
      <Container>
        <div className='flex flex-col lg:flex-row gap-x-5'>
          <Sidebar data={unfilteredProjects}  />

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
