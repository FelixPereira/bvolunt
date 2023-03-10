import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import { Layout } from './components/layout';
import { SocialProjects } from './pages/socialProjects';

const PageWrapper = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  padding: 0 1.25rem;
`;

function App() {
  return (
    <PageWrapper>
      <Header />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<SocialProjects />} />
          <Route path='organizacoes' element={<div>ORGANIZAÇÕES</div>} />
        </Route>
        <Route path='iniciar-sessao' element={<div>INICIAR SESSÃO</div>} />
        <Route path='cadastrar' element={<div>CADASTRAR-SE</div>} />
      </Routes>
    </PageWrapper>
  );
}

export default App;
