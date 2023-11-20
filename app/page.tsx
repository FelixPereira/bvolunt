import { getSocialProjects } from '@/actions/getSocialProjects';
import { getCurrentUser } from '@/actions/getCurrentUser';
import { getSocialOrganizations } from '@/actions/getSocialOrganizations';
import Container from '@/components/Container';
import CardsList from '@/components/cards/cardsList';
import BaseCard from '@/components/cards/baseCard';
import SectionHeader from '@/components/homeSectionHeader';
import { AccountType } from '@prisma/client';
import { getUser } from './actions';
import { CurrentUserData } from './types';

interface IParams {
  provincia: any;
  ordenar: any;
}

export default async function Home({ params }: { params: IParams }) {
  const socialProjects = await getSocialProjects(params);
  const socialOrganizations = await getSocialOrganizations(params);

  
  const loggedInUser = await getCurrentUser();
  const currentUser = await getUser(loggedInUser?.email);
  let currentUserData: CurrentUserData;

  if (loggedInUser?.accountType === AccountType.ORGANIZATION) {
    currentUserData = {
      accountType: AccountType.ORGANIZATION,
    };
  } else if (loggedInUser?.accountType === AccountType.USER) {
    currentUserData = {
      accountType: AccountType.USER,
      socialOrganizationIDs: currentUser?.socialOrganizationIDs,
      socialProjectIDs: currentUser?.socialProjectIDs,
    };
  }

  return (
    <main>
      <Container>
        <div>
          <div className='mb-20'>
            <SectionHeader typeOfData='projects' />
            <CardsList cols={4}>
              {socialProjects.slice(0, 4).map((socialProject) => (
                <BaseCard
                  responsibleName={socialProject.socialOrganization.name}
                  key={socialProject.id}
                  currentUserData={currentUserData}
                  data={socialProject}
                  typeOfData='projectos-sociais'
                />
              ))}
            </CardsList>
          </div>
          <div>
            <SectionHeader typeOfData='organizations' />
            <CardsList cols={4}>
              {socialOrganizations.slice(0, 4).map((socialOrganization) => (
                <BaseCard
                  responsibleName={socialOrganization.responsibleName}
                  key={socialOrganization.id}
                  currentUserData={currentUserData}
                  data={socialOrganization}
                  typeOfData='organizacoes-sociais'
                />
              ))}
            </CardsList>
          </div>
        </div>
      </Container>
    </main>
  );
}
