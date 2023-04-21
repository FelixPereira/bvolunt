import './globals.css';
import { Nunito } from 'next/font/google';
import Header from './components/header';
import RegisterModal from './components/RegisterModal';

export const metadata = {
  title: 'Portal do Voluntário',
  description: 'Conectando Voluntários',
};

const font = Nunito({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <RegisterModal />
        <Header />
        {children}
      </body>
    </html>
  );
}
