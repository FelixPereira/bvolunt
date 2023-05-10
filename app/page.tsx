import Image from 'next/image';
import { Inter } from 'next/font/google';

import Container from './components/Container';
import SocialProjectsPage from './components/socialProjectsPage';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='py-[150px]'>
      <Container>
        <SocialProjectsPage />
      </Container>
    </main>
  );
}
