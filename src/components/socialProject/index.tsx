import { Link } from 'react-router-dom';
import { Container, Header } from './style';
import { SocialProjectType } from './type';

interface SocialProjectProps {
  socialProject: SocialProjectType;
}

const footerContent = [
  { label: 'Organização promotora', description: 'organizationOwner' },
  { label: 'Voluntários participantes', description: 'registeredVolunteers' },
  { label: 'Participantes', description: 'province' },
];

export function SocialProject({ socialProject }: SocialProjectProps) {
  return (
    <Container>
      <Link to={`projectos-sociais/${socialProject._id}`}>
        <Header backgroundImage={socialProject.backgroundImage} />
      </Link>
      <div className='project_body'>
        <div className='logos-container'>
          {socialProject.sponsorsLogos.map((logo) => (
            <img src={logo} alt='' />
          ))}
        </div>
        <Link to={`projectos-sociais/${socialProject._id}`}>
          <h3>{socialProject.name}</h3>
        </Link>
      </div>
      <footer className='project_footer'>
        {footerContent.map((content) => (
          <div className='footer_content'>
            <p className='label'>{content.label}</p>
            <p className='description'>{socialProject[content.description]}</p>
          </div>
        ))}
      </footer>
    </Container>
  );
}
