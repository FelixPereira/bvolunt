import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useSearchParams } from 'react-router-dom';
import { FetchQueryDetails } from '../../components/fetchQueryDetails';
import { OrganizationsList } from '../../components/organizationsList';
import { Sidebar } from '../../components/sidebar';
import { useGetOrganizationsQuery } from '../../redux/services/organization';
import { Container } from './style';

export function OrganizationsPage() {
  const { fetchQuery } = useSelector((state: RootState) => state);
  const [searchParams] = useSearchParams();
  searchParams.set('orderby', 'desc');
  const provinceData = searchParams.get('province');
  const orderby = searchParams.get('orderby');

  const {
    data: organizations,
    isFetching,
    isError,
  } = useGetOrganizationsQuery(fetchQuery);

  console.log(provinceData);
  console.log(orderby);

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
