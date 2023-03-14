import { SocialProjectsContainer } from '../../components/socialProjectsContainer';
import { Container } from './style';
import { ProjHeasder } from '../../components/projectHeader';

const filterDetails = {
  province: 'Luanda',
  quantity: 20,
  type: 'organization'
}

export function Organizations() {
  return (
    <Container>
      <ProjHeasder filterDetails={filterDetails} />
      <SocialProjectsContainer />
    </Container>
  );
}
