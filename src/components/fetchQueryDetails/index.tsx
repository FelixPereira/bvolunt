import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { setOrder } from '../../redux/features/fetchQuerySlice';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, OrderByAsc, OrderByDesc } from './style';
import { renderQueryDescription } from '../../utils';
import { OrganizationType } from '../organization/type';

interface FetchQueryDetailsProps {
  organizations: OrganizationType[];
}

export function FetchQueryDetails({ organizations }: FetchQueryDetailsProps) {
  const { province, orderBy } = useAppSelector((state) => state.fetchQuery);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAscActive, setIsAscActive] = useState(true);
  const [isDescActive, setIsDescActive] = useState(false);
  const dispatch = useAppDispatch();
  const queryDescritpion = renderQueryDescription(
    'organizations',
    organizations
  );

  console.log(orderBy);

  const setOrderBy = (order: string) => {
    dispatch(setOrder(order));

    if (order === 'asc') {
      setIsAscActive(true);
      setIsDescActive(false);
    } else {
      setIsAscActive(false);
      setIsDescActive(true);
    }
  };

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
              <OrderByAsc
                isActive={isAscActive}
                onClick={() => setOrderBy('asc')}
              >
                Mais recentes
              </OrderByAsc>
              <OrderByDesc
                isActive={isDescActive}
                onClick={() => setOrderBy('desc')}
              >
                Mais antigos
              </OrderByDesc>
            </ul>
          )}
        </div>
      </div>
    </Container>
  );
}
