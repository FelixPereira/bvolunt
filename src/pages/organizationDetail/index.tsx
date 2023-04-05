import { useParams } from 'react-router-dom';
import { OrganizationType } from '../../components/organization/type';
import { Container, CoverImage } from './style';
import { Spinner } from '../../components/common/spinner';
import { useGetOrganizationByIdQuery } from '../../redux/services/organizationApi';

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
  const { data: organization, isFetching } = useGetOrganizationByIdQuery(id);

  if (isFetching) return <Spinner />;

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
          <ul aria-label='organization details list'>
            {detailsList.content.map((detail) => (
              <li key={detail.description}>
                <strong>{detail.label}</strong>
                <p role='organization detail' aria-label={detail.description}>
                  {organization?.[detail.description as keyof OrganizationType]}
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
                  {
                    organization?.[
                      address.description as keyof OrganizationType
                    ]
                  }
                </p>
              </span>
            ))}
          </address>
        </div>
      </article>
    </Container>
  );
}
