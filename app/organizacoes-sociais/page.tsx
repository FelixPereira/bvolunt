import { getSocialOrganizations } from '@/app/actions/getSocialOrganizations';
import { getCurrentUser } from '@/app/actions/getCurrentUser';
import PageContainer from '@/app/components/pageContainer';
import CardsList from '@/app/components/cards/cardsList';
import BaseCard from '@/app/components/cards/baseCard';
import Sidebar from '@/app/components/sidebar';
import Container from '../components/Container';

interface IParams {
  province: string;
  orderby: string;
}

const SocialOrganizationsPage = async ({
  searchParams,
}: {
  searchParams: IParams;
}) => {
  const socialOrganizations = await getSocialOrganizations(searchParams);
  const currentUser = await getCurrentUser();

  return (
    <main>
      <Container>
        <div className='flex flex-col lg:flex-row gap-x-5'>
          <Sidebar data={socialOrganizations} />
          <PageContainer
            data={socialOrganizations}
            typeOfData='socialOrganizations'
          >
            <CardsList>
              {socialOrganizations.map((socialOrganization) => (
                <BaseCard
                  key={socialOrganization.id}
                  data={socialOrganization}
                  currentUser={currentUser}
                  typeOfData='organizacoes-sociais'
                />
              ))}
            </CardsList>
          </PageContainer>
        </div>
      </Container>
    </main>
  );
};

export default SocialOrganizationsPage;
