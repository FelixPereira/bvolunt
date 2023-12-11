import { getSocialOrganizations, getUnfilteredSocialOrgs } from '@/actions';
import PageContainer from '@/components/pageWrapper';
import CardsList from '@/components/cards/cardsList';
import BaseCard from '@/components/cards/baseCard';
import Sidebar from '@/components/sidebar';
import Container from '@/components/Container';
import { useGetUserData } from '@/hooks/useGetUserData';
import Pagination from '@/components/pagination';
import { PAGE_SIZE } from '@/utils';

interface IParams {
  provincia: string;
  ordenar: string;
  page: string;
}

const SocialOrgsPage = async ({ searchParams }: { searchParams: IParams }) => {
  const unfilteredSocialOrgs = await getUnfilteredSocialOrgs();
  const { currentUserData } = await useGetUserData();

  const pageNumber = Number(searchParams.page) || 1;
  const take = PAGE_SIZE;
  const skip = (pageNumber - 1) * take;

  const { data: socialOrganizations, metaData } = await getSocialOrganizations({
    skip,
    take,
    ...searchParams,
  });

  return (
    <main>
      <Container>
        <div className='flex flex-col lg:flex-row gap-x-5'>
          <Sidebar data={unfilteredSocialOrgs} />
          <PageContainer
            data={socialOrganizations}
            typeOfData='socialOrganizations'
            totalStoredData={unfilteredSocialOrgs.length}
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
            <Pagination {...metaData} page={searchParams.page} />
          </PageContainer>
        </div>
      </Container>
    </main>
  );
};

export default SocialOrgsPage;
