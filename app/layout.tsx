import './globals.css';
import { Nunito } from 'next/font/google';
import Header from './components/header';
import RegisterModal from './components/registerModal/RegisterModal';
import ToasterProvider from './components/providers/ToasterProvider';
import ReactReduxProvider from './components/providers/ReactReduxProvider';

export const metadata = {
  title: 'Portal do Voluntário',
  description: 'Conectando Voluntários',
};

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <ToasterProvider />
        <ReactReduxProvider>
          <RegisterModal />
          <Header />
          {children}
        </ReactReduxProvider>
      </body>
    </html>
  );
}
