import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from './style';

interface FilterDetailType {
  province: string;
  quantity: number;
  type: string;
}

interface ProjHeaderProps {
  filterDetails: FilterDetailType;
}

export function ProjHeasder({ filterDetails }: ProjHeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <Container>
      <div>
        <h2>Província: {filterDetails.province} </h2>
        <p>
          <strong>
            {filterDetails.quantity ? '#' + filterDetails.quantity : ''}
          </strong>{' '}
          {filter(filterDetails)}
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

function filter(filterDetails: FilterDetailType) {
  let message: string;

  if (filterDetails.quantity > 1 && filterDetails.type === 'project') {
    message = 'projectos sociais encontrados';
  } else if (filterDetails.quantity === 1 && filterDetails.type === 'project') {
    message = 'projecto social encontrado';
  } else if (filterDetails.quantity === 0 && filterDetails.type === 'project') {
    message = 'Nenhum projecto social encontrado';
  } else if (
    filterDetails.quantity > 1 &&
    filterDetails.type === 'organization'
  ) {
    message = 'organizações encontradas';
  } else if (
    filterDetails.quantity === 1 &&
    filterDetails.type === 'organization'
  ) {
    message = 'organização encontrada';
  } else if (
    filterDetails.quantity === 0 &&
    filterDetails.type === 'organization'
  ) {
    message = 'Nenhuma organização encontrada';
  }

  return message;
}
