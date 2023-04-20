import { Outlet } from 'react-router-dom';
import { Sidebar } from '../not using/sidebar';
import styled from 'styled-components';

export const Container = styled.main`
  padding-top: 30px;

  width: 100%;
`;

export default function Layout() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}
