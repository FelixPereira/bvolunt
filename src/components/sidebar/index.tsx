import { Provinces } from '../../store/provinces';
import { FilterQuery } from '../../pages/organizationsPage';
import { Container } from './style';

interface SideBarProps {
  setProvince: (value: React.SetStateAction<FilterQuery>) => void;
  filterQuery: FilterQuery;
  provinces: Provinces[];
  type: string;
}

export function Sidebar({
  provinces,
  type,
  setProvince,
  filterQuery,
}: SideBarProps) {
  return (
    <Container>
      <h3>Pesquisar por província</h3>
      <ul>
        {provinces.map((province) => (
          <li
            onClick={() =>
              setProvince({ ...filterQuery, province: province.name })
            }
            key={province.slug}
          >
            {province.name} {/* ({province[type as keyof Provinces]}) */} (60)
          </li>
        ))}
      </ul>
    </Container>
  );
}
