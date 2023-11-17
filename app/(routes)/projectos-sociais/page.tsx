import BaseCard from '@/components/cards/baseCard';
import CardsList from '@/components/cards/cardsList';
import PagesContainer from '@/components/pageWrapper';
import Sidebar from '@/components/sidebar';
import Container from '@/components/Container';
import {
  getUnfilteredProjects,
  getSocialProjects,
  getCurrentUser,
  getUser,
} from '@/actions';
import { AccountType } from '@prisma/client';

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
  const looggedInUserAccount = await getCurrentUser();
  const currentUser = await getUser(looggedInUserAccount?.email);

  let currentUserData: {
    accountType: AccountType;
    socialProjectIDs?: string[];
  };

  if (looggedInUserAccount?.accountType === AccountType.ORGANIZATION) {
    currentUserData = {
      accountType: AccountType.ORGANIZATION,
    };
  } else if (looggedInUserAccount?.accountType === AccountType.USER) {
    currentUserData = {
      accountType: AccountType.USER,
      socialProjectIDs: currentUser?.socialProjectIDs,
    };
  }

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
                    currentUserData={currentUserData}
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
