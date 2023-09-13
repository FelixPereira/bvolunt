import { getSocialOrganizations } from '@/actions/getSocialOrganizations';
import { getCurrentUser } from '@/actions/getCurrentUser';
import PageContainer from '@/components/pageWrapper';
import CardsList from '@/components/cards/cardsList';
import BaseCard from '@/components/cards/baseCard';
import Sidebar from '@/components/sidebar';
import { getUnfilteredSocialOrgs } from '@/actions/getUnfilteredSocialOrgs';
import Container from '@/components/Container';

interface IParams {
  provincia: string;
  ordenar: string;
}

const SocialOrgsPage = async ({ searchParams }: { searchParams: IParams }) => {
  const socialOrganizations = await getSocialOrganizations(searchParams);
  const unfilteredSocialOrgs = await getUnfilteredSocialOrgs();
  const currentUser = await getCurrentUser();

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
                  currentUser={currentUser}
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
