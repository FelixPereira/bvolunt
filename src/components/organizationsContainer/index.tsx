import { OrganizationType } from '../organization/type';
import { Organization } from '../organization';
import { Container } from './style';
import { ORGANIZATIONS } from '../../store/organizations';

export function OrganizationsContainer() {
  return (
    <Container>
      {ORGANIZATIONS.map((organization: OrganizationType) => (
        <Organization key={organization._id} organization={organization} />
      ))}
    </Container>
  );
}
