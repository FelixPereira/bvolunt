import { Organization } from '../organization';
import { OrganizationType } from '../organization/type';
import { Spinner } from '../common/spinner';
import { Container } from './style';

interface OrganizationsListProps {
  organizations: OrganizationType[];
  isFetching: boolean;
  isError: boolean;
}

export function OrganizationsList({
  organizations,
  isFetching,
  isError,
}: OrganizationsListProps) {
  if (isFetching) return <Spinner />;

  return (
    <Container>
      {organizations.map((organization: OrganizationType) => (
        <Organization key={organization._id} organization={organization} />
      ))}
    </Container>
  );
}
