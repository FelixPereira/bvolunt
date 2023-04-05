import { useDispatch } from 'react-redux';
import { setProvince } from '../../redux/features/fetchQuerySlice';
import { Container } from './style';
import { useNavigate } from 'react-router-dom';
import { useGetOrganizationsByProvinceQuery } from '../../redux/services/organizationApi';
import { PROVINCES } from '../../data/provinces';

export function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getTotalOrganizations = (province: string) => {
    const { data: organizations } =
      useGetOrganizationsByProvinceQuery(province);
    return organizations?.length;
  };

  return (
    <Container>
      <h3>Pesquisar por província</h3>
      <ul>
        {PROVINCES.map((province) => (
          <li
            onClick={() => {
              dispatch(setProvince({ province: province.name }));
              navigate(`/organizacoes?province=${province.name}`);
            }}
            key={province.name}
          >
            {province.name} ({getTotalOrganizations(province.name)})
          </li>
        ))}
      </ul>
    </Container>
  );
}
