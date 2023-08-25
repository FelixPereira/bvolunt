import React from 'react';
import Container from '@/components/Container';
import Wrapper from './dashboardWrapper';
import { getCurrentUser } from '@/actions';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();

  return (
    <main>
      <Container>
        <Wrapper currentUser={currentUser}>{children}</Wrapper>
      </Container>
    </main>
  );
};

export default Layout;
