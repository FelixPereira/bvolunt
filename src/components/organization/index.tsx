import { Link } from 'react-router-dom';
import { Container, HeaderImage } from './style';
import { OrganizationType } from './type';

interface OrgnizationProps {
  organization: OrganizationType;
}

export function Organization({ organization }: OrgnizationProps) {
  return (
    <Container>
      <Link to={`/organizacoes/${organization._id}`}>
        <HeaderImage backgroundImage={organization.backgroundImage} />
      </Link>
      <div className='card_body'>
        <Link to={`projectos-sociais/${organization._id}`}>
          <h3>{organization.name}</h3>
        </Link>
        <p>{organization.description}</p>
      </div>
      <footer className='card_footer'>
        <div className='footer_content'>
          <p className='label'>Responsável</p>
          <p className='description'>{organization.responsible}</p>
        </div>
      </footer>
    </Container>
  );
}
