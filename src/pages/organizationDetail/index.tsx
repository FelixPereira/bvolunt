import { useParams } from 'react-router-dom';
import { ORGANIZATIONS } from '../../store/organizations';
import { OrganizationType } from '../../components/organization/type';
import { Container } from './style';

export function OrganizationDetail() {
  const { id } = useParams();
  const organization = ORGANIZATIONS.find(
    (organization: OrganizationType) => organization._id === id
  );

  return (
    <Container>
      <h2>{organization?.name}</h2>
      <div className='detail_container'>
        <div className='organization_detail'>
          <strong>Bairro:</strong>
          <p>{organization?.address.street}</p>
        </div>
        <div className='organization_detail'>
          <strong>Município:</strong>
          <p>{organization?.address.county}</p>
        </div>
        <div className='organization_detail'>
          <strong>Província:</strong>
          <p>{organization?.address.province}</p>
        </div>
     </div>
    </Container>
  );
}
