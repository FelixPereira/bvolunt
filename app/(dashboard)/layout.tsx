import Container from '@/components/Container';
import React from 'react';
import Sidebar from './usuario/sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
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
