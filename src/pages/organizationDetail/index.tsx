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
          <ul>
            {detailsList.content.map((detail) => (
              <li>
                <strong>{detail.label}</strong>
                <p>{detail.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>{addressList.title}</h3>
          <ul>
            <ul>
              {addressList.content.map((address) => (
                <li>
                  <strong>{address.label}</strong>
                  <p>{address.description}</p>
                </li>
              ))}
            </ul>
          </ul>
        </div>
      </article>
    </Container>
  );
}
