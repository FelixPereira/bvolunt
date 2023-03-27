import { useParams } from 'react-router-dom';
import { OrganizationType } from '../../components/organization/type';
import { Container, CoverImage } from './style';
import { useEffect, useState } from 'react';
import { Spinner } from '../../components/common/spinner';

const detailsList = {
  title: 'Detalhes',
  content: [
    { label: 'Responsável', description: 'responsible' },
    { label: 'Total de voluntários', description: 'totalVolunteers' },
    { label: 'Telefone', description: 'telephone' },
    { label: 'E-mail', description: 'email' },
  ],
};

const addressList = {
  title: 'Endereço',
  content: [
    { label: 'Bairro', description: 'street' },
    { label: 'Município', description: 'county' },
    { label: 'Província', description: 'province' },
  ],
};

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
      <CoverImage coverimage={organization?.coverImage} />
      <article>
        <h2>{organization?.name}</h2>
        <p>{organization?.description}</p>
      </article>
      <article className='organization-details'>
        <div>
          <h3>{detailsList.title}</h3>
          <ul aria-label='Project details'>
            {detailsList.content.map((detail) => (
              <li key={detail.description}>
                <strong>{detail.label}</strong>
                <p>
                  {organization[detail.description as keyof OrganizationType]}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>{addressList.title}</h3>
          <address>
            {addressList.content.map((address) => (
              <span key={address.description}>
                <strong>{address.label}</strong>
                <p>
                  {organization[address.description as keyof OrganizationType]}
                </p>
              </span>
            ))}
          </address>
        </div>
      </article>
    </Container>
  );
}
