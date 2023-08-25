'use client';

import { SafeUser } from '@/types';
import { useRouter } from 'next/navigation';
import Sidebar from './usuario/sidebar';

interface WrapperProps {
  children: React.ReactNode;
  currentUser: SafeUser | null;
}

const Wrapper: React.FC<WrapperProps> = ({ children, currentUser }) => {
  const router = useRouter();

  if (!currentUser) {
    router.push('/');
    return null;
  }

  return (
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
  );
};

export default Wrapper;
