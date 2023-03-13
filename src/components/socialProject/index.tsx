import { Container, Header } from './style';
import { SocialProjectType } from './type';

interface SocialProjectProps {
  socialProject: SocialProjectType;
}

export function SocialProject({ socialProject }: SocialProjectProps) {
  return (
    <Container to={`projectos-sociais/${socialProject._id}`}>
      <Header backgroundImage={socialProject.backgroundImage} />
      <div className='project_body'>
        <div className='logos-container'>
          {socialProject.sponsorsLogos.map((logo) => (
            <img src={logo} alt='' />
          ))}
        </div>
        <h3>{socialProject.name}</h3>
      </div>
      <footer className='project_footer'>
        <div className='footer_content'>
          <p className='label'>Organização promotora</p>
          <p className='description'>{socialProject.organizationOwner}</p>
        </div>
        <div className='footer_content'>
          <p className='label'>Voluntários participantes</p>
          <p className='description'>{socialProject.registeredVolunteers}</p>
        </div>
        <div className='footer_content'>
          <p className='label'>Província</p>
          <p className='description'>{socialProject.province}</p>
        </div>
      </footer>
    </Container>
  );
}
