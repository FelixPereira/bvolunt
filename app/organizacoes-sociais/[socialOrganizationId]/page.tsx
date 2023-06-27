import { getSocialOrganizations } from '@/app/actions/getSocialOrganizations';
import Container from '@/app/components/Container';
import Sidebar from '@/app/components/sidebar';
import CardsListWrapper from '@/app/components/cards/pageWrapper';
import QueryDetails from '@/app/components/fetchQueryDetails';
import CardsList from '@/app/components/cards/cardsList';

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
  
  return (
    <main>
      <Container>
        <CardsListWrapper>
          <Sidebar />

          <div className='lg:w-[80%]'>
            <QueryDetails
              data={socialOrganizations}
              typeOfData='socialOrganizations'
            />

            <CardsList>
              {socialOrganizations.map((socialOrganization) => (
                <div key={socialOrganization.id} />
              ))}
            </CardsList>
          </div>
        </CardsListWrapper>
      </Container>
    </main>
  );
};
export default SocialOrganizationsPage;

// IMPLEMENT PARTIAL RENDERING
