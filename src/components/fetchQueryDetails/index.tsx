import { useState } from 'react';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from './style';
import { renderQueryDescription } from '../../utils';
import { OrganizationType } from '../organization/type';

interface FetchQueryDetailsProps {
  organizations: OrganizationType[];
}

export function FetchQueryDetails({ organizations }: FetchQueryDetailsProps) {
  const { province } = useSelector((state: RootState) => state.fetchQuery);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const queryDescritpion = renderQueryDescription(
    'organizations',
    organizations
  );

  return (
    <Container>
      <div>
        <h2>Província: {province || 'Todas'}</h2>
        <p>
          <strong>#{organizations?.length}</strong>
          {' ' + queryDescritpion}
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
