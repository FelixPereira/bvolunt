import { useState, useEffect } from 'react';
import { Container } from './style';
import { FilterDetails } from '../../components/filterDetails';
import { OrganizationsList } from '../../components/organizationsList';
import { OrganizationType } from '../../components/organization/type';
import { Sidebar } from '../../components/sidebar';
import { PROVINCES } from '../../store/provinces';

export interface FilterQuery {
  searchTerm: string;
  province: string;
  orderBy: string;
}

export function OrganizationsPage() {
  const [filterQuery, setFilterQuery] = useState<FilterQuery>({
    searchTerm: '',
    province: 'Luanda',
    orderBy: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [organizations, setOrganizations] = useState<OrganizationType[]>(
    [] as OrganizationType[]
  );

  useEffect(() => {
    setIsLoading(true);
    fetch('/api/organizations')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.organizations)
        if (filterQuery.province) {
          const d = data.organizations.filter((org: OrganizationType) => org.province === filterQuery.province);
          setOrganizations(d);
        } else {

          setOrganizations(data.organizations);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
  }, [filterQuery]);

  return (
    <Container>
      <Sidebar
        provinces={PROVINCES}
        type='organizations'
        filterQuery={filterQuery}
        setProvince={setFilterQuery}
      />
      <main>
        <FilterDetails
          filterQuery={filterQuery}
          organizations={organizations}
        />
        <OrganizationsList
          isLoading={isLoading}
          organizations={organizations}
        />
      </main>
    </Container>
  );
}
