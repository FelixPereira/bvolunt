import { Outlet } from 'react-router-dom';
import { Sidebar } from '../sidebar';
import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 30px;

  width: 100%;
`;

export function Layout() {
  return (
    <Container>
      <Sidebar />
      <Outlet />
    </Container>
  );
}
