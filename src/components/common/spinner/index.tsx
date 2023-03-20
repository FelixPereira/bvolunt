import { RiseLoader } from 'react-spinners';
import { theme } from '../../../theme';
import { Container } from './style';

export function Spinner() {
  return (
    <Container>
      <RiseLoader color={theme.color.secondary} />
    </Container>
  )
}