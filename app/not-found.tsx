'use client';

import Link from 'next/link';
import Container from './components/Container';

const alternativeLinks = [
  { label: 'Home', url: '/' },
  { label: 'Projectos sociais', url: '/projectos-sociais' },
  { label: 'Organizações sociais', url: '/organizacoes-sociais' },
  { label: 'Eventos', url: '/eventos' },
];

const NotFound = () => {
  return (
    <main
      className='
        py-[150px]
        flex
        justify-center
        items-center
        h-[100vh]
        w-full
      '
    >
      <Container>
        <div
          className='
            flex
            flex-col
            md:flex-row
            items-center
            justify-center
            gap-x-[20px]
          '
        >
          <h1 className='text-9xl font-bold text-textTitle'>404</h1>
          <div
            className='
              flex
              flex-col
              items-center
              md:items-start
            '
          >
            <h2 className='text-textTitle text-[40px]'>
              Página não encontrada
            </h2>
            <p
              className='
                text-textBody
                text-lg
                mb-5
                text-center
                md:text-left
              '
            >
              A página que procura não foi encontrada. Explore outras páginas:
            </p>
            <nav className='flex gap-x-2'>
              {alternativeLinks.map((link) => (
                <Link
                  className='
                    bg-primary 
                    text-sm 
                    px-2 
                    py-3 
                    rounded 
                    text-neutralLight
                  '
                  key={link.url}
                  href={link.url}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default NotFound;
