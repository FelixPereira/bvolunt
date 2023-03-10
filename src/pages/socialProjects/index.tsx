import styled from 'styled-components';

import { Sidebar } from '../../components/sidebar';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 30px 0;
`;

export function SocialProjects() {
  return (
    <Container>
      <Sidebar />
      <div>PROJECTOS SOCIAIS</div>
    </Container>
  );
}
