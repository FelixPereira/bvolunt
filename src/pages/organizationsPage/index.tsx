import { Container } from './style';
import { ProjHeasder } from '../../components/projectHeader';
import { OrganizationsContainer } from '../../components/organizationsList';

const filterDetails = {
  province: 'Luanda',
  quantity: 20,
  type: 'organization'
}

export function OrganizationsPage() {
  return (
    <Container>
      <ProjHeasder filterDetails={filterDetails} />
      <OrganizationsContainer />
    </Container>
  );
}
