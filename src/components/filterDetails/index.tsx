import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from './style';
import { renderFilterDescription } from '../../utils';
import { OrganizationType } from '../organization/type';
import { FilterQuery } from '../../pages/organizationsPage';

interface FilterDetailsProps {
  organizations: OrganizationType[];
  filterQuery: FilterQuery;
}

export function FilterDetails({ organizations, filterQuery }: FilterDetailsProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const filterDescritpion = renderFilterDescription(
    organizations,
    'organizations'
  );

  return (
    <Container>
      <div>
        <h2>Província: {filterQuery.province} </h2>
        <p>
          <strong>#{organizations.length}</strong>
          {' ' + filterDescritpion}
        </p>
      </div>
      <div className='order'>
        <div>
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <span>Ordenar</span>
            <ExpandMoreIcon />
          </button>
          {isDropdownOpen && (
            <ul>
              <li>Mais recentes</li>
              <li>Mais antigos</li>
            </ul>
          )}
        </div>
      </div>
    </Container>
  );
}
