import { useNavigate } from 'react-router-dom';
import { Card, CoverImage } from './style';
import { OrganizationType } from './type';

interface OrgnizationProps {
  organization: OrganizationType;
}

export function Organization({ organization }: OrgnizationProps) {
  const navigate = useNavigate();

  const handleViewDetail = () => {
    navigate(`/organizacoes/${organization._id}`);
  };

  return (
    <Card>
      <CoverImage
        onClick={handleViewDetail}
        coverImage={organization.coverImage}
      />
      <div className='card_body'>
        <h3 onClick={handleViewDetail}>{organization.name}</h3>
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
