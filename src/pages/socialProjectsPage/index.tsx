import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
          <div>
            <button>
              <span>Ordenar</span>
              <ExpandMoreIcon />
            </button>
            <ul>
              <li>Mais recentes</li>
              <li>Mais antogos</li>
            </ul>
          </div>
        </div>
      </div>

      <SocialProjectsContainer />
    </Container>
  );
}
