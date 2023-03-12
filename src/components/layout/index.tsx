import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
`;

export function Layout() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}
