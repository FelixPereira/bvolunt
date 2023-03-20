import { useParams } from 'react-router-dom';
import { OrganizationType } from '../../components/organization/type';
import { Container, CoverImage } from './style';
import { useEffect, useState } from 'react';
import { Spinner } from '../../components/common/spinner';

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
  const [isLoading, setIsLoading] = useState(false);
  const [organization, setOrganization] = useState<OrganizationType>(
    {} as OrganizationType
  );

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/organizations/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setOrganization(data.organization);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <Container>
      <article className='left__panel'>
        <CoverImage coverimage={organization?.coverImage} />
        {organizationDetails.map((detail) => (
          <div key={detail.description} className='organization_detail'>
            <strong>{detail.label}:</strong>
            <p>
              {organization?.[detail.description as keyof OrganizationType]}
            </p>
          </div>
        ))}
      </article>
      <article className='right__panel'>
        <h2>{organization?.name}</h2>
        <p className='organization_description'>
          {organization?.description}
        </p>
      </article>
    </Container>
  );
}
