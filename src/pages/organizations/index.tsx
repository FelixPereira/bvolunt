import { Container } from './style';
import { ProjHeasder } from '../../components/projectHeader';
import { OrganizationsContainer } from '../../components/organizationsContainer';

const filterDetails = {
  province: 'Luanda',
  quantity: 20,
  type: 'organization'
}

export function Organizations() {
  return (
    <Container>
      <ProjHeasder filterDetails={filterDetails} />
      <OrganizationsContainer />
    </Container>
  );
}
