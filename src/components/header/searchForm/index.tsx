import { Container } from './style';
import { Search } from '@mui/icons-material';

export function SearchForm() {
  return (
    <Container>
      <Search />
      <input type='search' placeholder='Pesquisar...' />
    </Container>
  );
}
