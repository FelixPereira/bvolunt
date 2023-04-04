import { useDispatch } from 'react-redux';
import { setProvince } from '../../redux/fetchQuerySlice';
import { Container } from './style';
import { PROVINCES } from '../../store/provinces';
import { useNavigate } from 'react-router-dom';

export function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
            {province.name} (0)
          </li>
        ))}
      </ul>
    </Container>
  );
}
