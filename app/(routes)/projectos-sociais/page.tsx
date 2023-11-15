import BaseCard from '@/components/cards/baseCard';
import CardsList from '@/components/cards/cardsList';
import PagesContainer from '@/components/pageWrapper';
import Sidebar from '@/components/sidebar';
import Container from '@/components/Container';
import {
  getUnfilteredProjects,
  getSocialProjects,
  getCurrentUser,
} from '@/actions';

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
  const currentUser = null;

  return (
    <main>
      <Container>
        <div className='flex flex-col lg:flex-row gap-x-5'>
          <Sidebar data={unfilteredProjects} />

          <PagesContainer data={socialProjects} typeOfData='socialProjects'>
            <CardsList cols={3}>
              {socialProjects.map((socialProject) => {
                return (
                  <BaseCard
                    key={socialProject.id}
                    currentUser={currentUser}
                    data={socialProject}
                    responsibleName={socialProject.socialOrganization?.name}
                    typeOfData='projectos-sociais'
                  />
                );
              })}
            </CardsList>
          </PagesContainer>
        </div>
      </Container>
    </main>
  );
};

export default SocialProjectsPage;
