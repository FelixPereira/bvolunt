import { useState, useEffect } from 'react';
import { Organization } from '../organization';
import { OrganizationType } from '../organization/type';
import { Spinner } from '../common/spinner';
import { Container } from './style';

export function OrganizationsContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const [organizations, setOrganizations] = useState<OrganizationType[]>(
    [] as OrganizationType[]
  );

  useEffect(() => {
    setIsLoading(true);
    fetch('/api/organizations')
      .then((response) => response.json())
      .then((data) => {
        setOrganizations(data.organizations);
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
      {organizations.map((organization: OrganizationType) => (
        <Organization key={organization._id} organization={organization} />
      ))}
    </Container>
  );
}
