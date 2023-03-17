import { useParams } from 'react-router-dom';
import { OrganizationType } from '../../components/organization/type';
import { Container, CoverImage } from './style';
import { useEffect, useState } from 'react';

const organizationDetails = [
  { label: 'Responsável', description: 'responsible' },
  { label: 'Total de voluntários', description: 'totalVolunteers' },
  { label: 'Telefone', description: 'telephone' },
  { label: 'E-mail', description: 'email' },
  { label: 'Bairro', description: 'street' },
  { label: 'Município', description: 'county' },
  { label: 'Província', description: 'province' },
];

export function OrganizationDetail() {
  const { id } = useParams();
  const [organization, setOrganization] = useState<OrganizationType>(
    {} as OrganizationType
  );

  useEffect(() => {
    fetch(`/api/organizations/${id}`)
      .then((response) => response.json())
      .then((data) => setOrganization(data.organization))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <Container>
      <CoverImage coverimage={organization?.coverImage} />
      <h2>{organization?.name}</h2>
      <p className='organization_description'>{organization?.description}</p>
      {organizationDetails.map((detail) => (
        <div key={detail.description} className='organization_detail'>
          <strong>{detail.label}:</strong>
          <p>{organization?.[detail.description as keyof OrganizationType]}</p>
        </div>
      ))}
    </Container>
  );
}
