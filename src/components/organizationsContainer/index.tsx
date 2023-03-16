import { useState, useEffect } from 'react';
import { OrganizationType } from '../organization/type';
import { Organization } from '../organization';
import { Container } from './style';


export function OrganizationsContainer() {
  const [organizations, setOrganizations] = useState<OrganizationType[]>([] as OrganizationType[]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('api/organizations')
      .then(response => response.json())
      .then(data => {
        setOrganizations(data.organizations);
        setLoading(false);
      }).catch((err) => {
        console.log(err.message)
        }) 
  }, []);

  if(loading) return <div>Loading...</div>
  
  return (
    <Container>
      {organizations.map((organization: OrganizationType) => (
        <Organization key={organization._id} organization={organization} />
      ))}
    </Container>
  );
}
