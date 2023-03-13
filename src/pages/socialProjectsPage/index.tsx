import { SocialProjectsContainer } from '../../components/socialProjectsContainer';
import { Container } from './style';

export function SocialProjectsPage() {
  return (
    <Container>
      <div className='content_header'>
        <div className='title'>
          <h2>Província: Luanda</h2>
          <p>50 projectos sociais encontrados para a província de Luanda</p>
        </div>

        <div className='order'>
          <strong>Ordenar</strong>
          <select>
            <option value="">Mais recentes</option>
            <option value="">Mais antigos</option>
          </select>
        </div>
      </div>

      <SocialProjectsContainer />
    </Container>
  );
}
