import {
  getSocialOrganizations,
  getCurrentUser,
  getUser,
  getUnfilteredSocialOrgs,
} from '@/actions';
import { AccountType } from '@prisma/client';
import PageContainer from '@/components/pageWrapper';
import CardsList from '@/components/cards/cardsList';
import BaseCard from '@/components/cards/baseCard';
import Sidebar from '@/components/sidebar';
import Container from '@/components/Container';

interface IParams {
  provincia: string;
  ordenar: string;
}

const SocialOrgsPage = async ({ searchParams }: { searchParams: IParams }) => {
  const socialOrganizations = await getSocialOrganizations(searchParams);
  const unfilteredSocialOrgs = await getUnfilteredSocialOrgs();
  const loggedInUserAccount = await getCurrentUser();
  const currentUser = await getUser(loggedInUserAccount?.email);

  let currentUserData: {
    accountType: AccountType;
    socialOrganizationIDs?: string[];
  };

  if (loggedInUserAccount?.accountType === AccountType.ORGANIZATION) {
    currentUserData = {
      accountType: AccountType.ORGANIZATION,
    };
  } else if (loggedInUserAccount?.accountType === AccountType.USER) {
    currentUserData = {
      accountType: AccountType.USER,
      socialOrganizationIDs: currentUser?.socialOrganizationIDs,
    };
  }

  return (
    <main>
      <Container>
        <div className='flex flex-col lg:flex-row gap-x-5'>
          <Sidebar data={unfilteredSocialOrgs} />
          <PageContainer
            data={socialOrganizations}
            typeOfData='socialOrganizations'
          >
            <CardsList cols={3}>
              {socialOrganizations.map((socialOrganization) => (
                <BaseCard
                  key={socialOrganization.id}
                  data={socialOrganization}
                  currentUserData={currentUserData}
                  typeOfData='organizacoes-sociais'
                  responsibleName={socialOrganization.responsibleName}
                />
              ))}
            </CardsList>
          </PageContainer>
        </div>
      </Container>
    </main>
  );
};

export default SocialOrgsPage;
