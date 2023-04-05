import { FetchQueryDetails } from '../../components/fetchQueryDetails';
import { OrganizationsList } from '../../components/organizationsList';
import { Sidebar } from '../../components/sidebar';
import { useGetOrganizationsQuery } from '../../redux/services/organizationApi';
import { useAppSelector } from '../../redux/hooks';
import { Container } from './style';

export function OrganizationsPage() {
  const { fetchQuery } = useAppSelector((state) => state);
  const {
    data: organizations,
    isFetching,
    isError,
  } = useGetOrganizationsQuery(fetchQuery);

  return (
    <Container>
      <Sidebar />
      <main>
        <FetchQueryDetails organizations={organizations} />
        <OrganizationsList
          isFetching={isFetching}
          isError={isError}
          organizations={organizations}
        />
      </main>
    </Container>
  );
}
