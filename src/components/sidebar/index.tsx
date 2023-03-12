import { Container } from './style';
import provinces from '../../store/provinces';

export function Sidebar() {
  return (
    <Container>
      <h3>Pesquisar por província</h3>
      <ul>
        {provinces.map((province) => (
          <li key={province.slug}>
            {province.name} ({province.socialProjects.length})
          </li>
        ))}
      </ul>
    </Container>
  );
}
