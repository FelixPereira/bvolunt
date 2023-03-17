import { Link } from 'react-router-dom';
import { Card, CoverImage } from './style';
import { OrganizationType } from './type';

interface OrgnizationProps {
  organization: OrganizationType;
}

export function Organization({ organization }: OrgnizationProps) {
  return (
    <Card>
      <Link to={`/organizacoes/${organization._id}`}>
        <CoverImage coverImage={organization.coverImage} />
      </Link>
      <div className='card_body'>
        <Link to={`projectos-sociais/${organization._id}`}>
          <h3>{organization.name}</h3>
        </Link>
        <p>{organization.description.slice(0, 100)} ...</p>
      </div>
      <footer className='card_footer'>
        <div className='footer_content'>
          <p className='label'>Responsável</p>
          <p className='description'>{organization.responsible}</p>
        </div>
      </footer>
    </Card>
  );
}
