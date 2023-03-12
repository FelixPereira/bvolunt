import { Sidebar } from '../../components/sidebar';
import { SocialProjectsContainer } from '../../components/socialProjectsContainer';
import { Container } from '../style';

export function SocialProjectsPage() {
  return (
    <Container>
      <Sidebar />
      <SocialProjectsContainer />
    </Container>
  );
}
