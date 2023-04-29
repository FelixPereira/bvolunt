import './globals.css';
import { Nunito } from 'next/font/google';
import Header from './components/header';
import RegisterModal from './components/registerModal/RegisterModal';
import LoginModal from './components/loginModal/LoginModal';
import ToasterProvider from './components/providers/ToasterProvider';
import ReactReduxProvider from './components/providers/ReactReduxProvider';
import { getCurrentUser } from './actions/getCurrentUser';

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
      <body className={font.className}>
        <ToasterProvider />
        <ReactReduxProvider>
          <RegisterModal />
          <LoginModal />
          <Header currentUser={currentUser} />
          {children}
        </ReactReduxProvider>
      </body>
    </html>
  );
}
