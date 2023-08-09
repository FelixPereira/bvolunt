import './globals.css';
import { Nunito } from 'next/font/google';

import Header from './components/header';
import RegisterModal from './components/modals/registerModal';
import LoginModal from './components/modals/loginModal';
import SocialProjectModal from './components/modals/socialProjectModal';
import Providers from './providers/Providers';
import { getCurrentUser } from './actions/getCurrentUser';
import Loading from './loading';
import { Suspense } from 'react';
import SocialOrganizationModal from './components/modals/socialOrgModal';
import AppWrapper from './components/appWrapper';

export const metadata = {
  title: 'Portal do Voluntário',
  description: 'Conectando Voluntários',
};

const font = Nunito({
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang='en'>
      <body className={font.className} suppressHydrationWarning={true}>
        <Providers>
          <RegisterModal />
          <LoginModal />
          <SocialProjectModal />
          <SocialOrganizationModal />

          <AppWrapper>
            <Header currentUser={currentUser} />
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </AppWrapper>
        </Providers>
      </body>
    </html>
  );
}
