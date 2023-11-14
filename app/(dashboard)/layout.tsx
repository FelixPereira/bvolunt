import React from 'react';
import Container from '@/components/Container';
import Sidebar from './_components/sidebar';
import { getCurrentUser } from '@/actions';
import { redirect } from 'next/navigation';

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
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
          <section
            className='
              bg-neutralLight
              rounded
              w-full
              p-5
            '
          >
            {children}
          </section>
        </section>
      </Container>
    </main>
  );
};

export default DashboardLayout;
