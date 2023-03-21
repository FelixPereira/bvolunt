import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from './style';
import { FilterDetailType, renderFilterDescription } from '../../utils/';

interface ProjHeaderProps {
  filterDetails: FilterDetailType;
}

export function ProjHeasder({ filterDetails }: ProjHeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const filterDescritpion = renderFilterDescription(filterDetails);

  return (
    <Container>
      <div>
        <h2>Província: {filterDetails.province} </h2>
        <p>
          <strong>
            {filterDetails.quantity ? '#' + filterDetails.quantity : ''}
          </strong>{' '}
          {filterDescritpion}
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
