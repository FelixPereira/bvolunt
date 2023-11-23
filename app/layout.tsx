import './globals.css';
import { Nunito } from 'next/font/google';

import { Suspense } from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Loading from './loading';
import AppWrapper from './components/appWrapper';
import SocialOrganizationModal from './components/modals/register/registerOrg';
import RegisterTypeModal from './components/modals/register';
import Providers from './providers/Providers';
import RegisterModal from './components/modals/register/registerVolunteer';
import LoginModal from './components/modals/login';
import SocialProjectModal from './components/modals/addSocialProject';
import { getCurrentUser } from './actions/getCurrentUser';
import { UserMenuData } from './types';

export const metadata = {
  title: 'bVolunt',
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
  let currentUser: UserMenuData | null;
  const currentSession = await getCurrentUser();

  if (!currentSession) {
    currentUser = null;
  } else {
    currentUser = {
      name: currentSession.name,
      email: currentSession.email,
      avatar: currentSession.avatar,
      accountType: currentSession.accountType,
    };
  }

  return (
    <html lang='en'>
      <body className={font.className} suppressHydrationWarning={true}>
        <Providers>
          <RegisterModal />
          <LoginModal />
          <SocialProjectModal />
          <SocialOrganizationModal />
          <RegisterTypeModal />

          <AppWrapper>
            <Header currentUser={currentUser} />
            <Suspense fallback={<Loading />}>{children}</Suspense>
            <div className='flex flex-1'></div>
            <Footer />
          </AppWrapper>
        </Providers>
      </body>
    </html>
  );
}
