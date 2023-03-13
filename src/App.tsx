import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import { Layout } from './components/layout';
import { SocialProjectsPage } from './pages/socialProjectsPage';
import { PageWrapper } from './GlobalStyle';

function App() {
  return (
    <PageWrapper>
      <Header />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<SocialProjectsPage />} />
          <Route path='organizacoes' element={<div>ORGANIZAÇÕES</div>} />
        </Route>
        <Route path='iniciar-sessao' element={<div>INICIAR SESSÃO</div>} />
        <Route path='cadastrar' element={<div>CADASTRAR-SE</div>} />
      </Routes>
    </PageWrapper>
  );
}

export default App;
