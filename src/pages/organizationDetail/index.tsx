import { useParams } from 'react-router-dom';
import { ORGANIZATIONS } from '../../store/organizations';
import { OrganizationType } from '../../components/organization/type';
import { Container, HeaderImage } from './style';

export function OrganizationDetail() {
  const { id } = useParams();
  const organization = ORGANIZATIONS.find(
    (organization: OrganizationType) => organization._id === id
  );

  return (
    <Container>
      <HeaderImage backgroundimage={organization?.backgroundImage} />
      <h2>{organization?.name}</h2>
      <p className='organization_description'>{organization?.description}</p>
      <div className='organization_detail'>
        <strong>Responsável:</strong>
        <p>{organization?.responsible}</p>
      </div>
      <div className='organization_detail'>
        <strong>Total de voluntários:</strong>
        <p>{organization?.totalVolunteers}</p>
      </div>
      <div className='organization_detail'>
        <strong>Bairro:</strong>
        <p>{organization?.address.street}</p>
      </div>
      <div className='organization_detail'>
        <strong>Telefone:</strong>
        <p>{organization?.telephone}</p>
      </div>
      <div className='organization_detail'>
        <strong>E-mail:</strong>
        <p>{organization?.email}</p>
      </div>
      <div className='organization_detail'>
        <strong>Município:</strong>
        <p>{organization?.address.county}</p>
      </div>
      <div className='organization_detail'>
        <strong>Província:</strong>
        <p>{organization?.address.province}</p>
      </div>
    </Container>
  );
}
