import { SocialProjectsContainer } from '../../components/socialProjectsList';
import { Container } from './style';
// import { ProjHeasder } from '../../components/projectHeader';

const filterDetails = {
  province: 'Cabinda',
  quantity: 24,
  type: 'project'
}

export function SocialProjectsPage() {
  return (
    <Container>
      {/* <ProjHeasder filterDetails={filterDetails} /> */}
      <SocialProjectsContainer />
    </Container>
  );
}
