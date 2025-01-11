import Container from '../Container';
import SocialIcons from '../socialIcons';

const Footer = () => {
  const footerLinks = [
    {
      label: 'Contacto',
      url: '#',
    },
    {
      label: 'Blog',
      url: '#',
    },
    {
      label: 'Parceiros',
      url: '#',
    },
    {
      label: 'Termos e Condições',
      url: '#',
    },
  ];
  return (
    <footer className='bg-primary py-5 mt-10'>
      <Container>
        <div className='flex justify-between items-center'>
          <div>
            <ul className='flex gap-x-4'>
              {footerLinks.map((link) => (
                <li key={link.label} className='font-bold text-neutralLight'>
                  <a href={link.url}>{link.label}</a>
                </li>
              ))}
            </ul>
            <span className='text-neutralLight text-[13px]'>
              Copyright © 2023{' '}
              <a href='#' className='font-bold'>
                FLXP3
              </a>{' '}
              - Todos os direitos reservados
            </span>
          </div>
          <SocialIcons />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
