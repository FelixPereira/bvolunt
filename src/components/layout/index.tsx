import { Outlet } from 'react-router-dom';
import { Sidebar } from '../sidebar';
import styled from 'styled-components';

export const Container = styled.main`
    padding-top: 30px;

  width: 100%;
`;

export function Layout() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}
