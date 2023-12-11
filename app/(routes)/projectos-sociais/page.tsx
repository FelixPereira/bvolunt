import BaseCard from '@/components/cards/baseCard';
import CardsList from '@/components/cards/cardsList';
import PagesContainer from '@/components/pageWrapper';
import Sidebar from '@/components/sidebar';
import Container from '@/components/Container';
import { getUnfilteredProjects, getSocialProjects } from '@/actions';
import { useGetUserData } from '@/hooks/useGetUserData';
import Pagination from '@/components/pagination';
import { PAGE_SIZE } from '@/utils';

interface IParams {
  provincia: string;
  ordenar: string;
  page: string;
}

const SocialProjectsPage = async ({
  searchParams,
}: {
  searchParams: IParams;
}) => {
  const unfilteredProjects = await getUnfilteredProjects();
  const { currentUserData } = await useGetUserData();

  const pageNumber = Number(searchParams?.page) || 1;
  const take = PAGE_SIZE;
  const skip = (pageNumber - 1) * take;

  const { data: socialProjects, metaData } = await getSocialProjects({
    skip,
    take,
    ordenar: searchParams.ordenar,
    provincia: searchParams.provincia,
  });

  return (
    <main>
      <Container>
        <div className='flex flex-col lg:flex-row gap-x-5'>
          <Sidebar data={unfilteredProjects} />

          <PagesContainer
            data={socialProjects}
            typeOfData='socialProjects'
            totalStoredData={unfilteredProjects.length}
          >
            <CardsList cols={3}>
              {socialProjects.map((socialProject) => {
                return (
                  <BaseCard
                    key={socialProject.id}
                    currentUserData={currentUserData}
                    data={socialProject}
                    responsibleName={socialProject.socialOrganization?.name}
                    typeOfData='projectos-sociais'
                  />
                );
              })}
            </CardsList>
            <Pagination {...metaData} page={searchParams.page} />
          </PagesContainer>
        </div>
      </Container>
    </main>
  );
};

export default SocialProjectsPage;
