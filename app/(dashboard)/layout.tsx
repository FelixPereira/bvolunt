import React from 'react';
import { redirect } from 'next/navigation';
import Container from '@/components/Container';
import Sidebar from './usuario/sidebar';
import { getCurrentUser } from '@/actions';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect('/');
  }

  return (
    <main>
      <Container>
        <section
          className='
            flex 
            flex-col 
            md:flex-row 
            justify-between
        '
        >
          <Sidebar />
          <div
            className='
              bg-neutralLight
              rounded
              w-full
              p-5
            '
          >
            {children}
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Layout;
