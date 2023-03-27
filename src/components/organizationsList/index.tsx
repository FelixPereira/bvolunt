import { Organization } from '../organization';
import { OrganizationType } from '../organization/type';
import { Spinner } from '../common/spinner';
import { Container } from './style';

interface OrganizationsListProps {
  organizations: OrganizationType[];
  isLoading: boolean;
}

export function OrganizationsList({
  organizations,
  isLoading,
}: OrganizationsListProps) {
  if (isLoading) return <Spinner />;

  return (
    <Container>
      {organizations.map((organization: OrganizationType) => (
        <Organization key={organization._id} organization={organization} />
      ))}
    </Container>
  );
}
