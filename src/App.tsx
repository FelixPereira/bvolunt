import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import { Layout } from './components/layout';
import { SocialProjectsPage } from './pages/socialProjectsPage';
import { PageWrapper } from './GlobalStyle';
import { Organizations } from './pages/organizations';
import { OrganizationDetail } from './pages/organizationDetail';
import { createServer, Model } from 'miragejs';
import { ORGANIZATIONS } from './store/organizations';
import { OrganizationType } from './components/organization/type';

createServer({
  models: {
    organization: Model,
  },

  routes() {
    this.namespace = 'api';

    this.get('/organizations', (schema, request) => {
      return schema.all('organization');
    });
  },

  seeds(server) {
    server.create('organization', {
      _id: '1',
      name: 'Projecto Jovens',
      coverImage: '/socialProjects/aldeia-nissi.jpeg',
      responsible: 'Portal do Volutário',
      totalVolunteers: 50,
      telephone: '222222222',
      email: 'porta@gmail.com',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit, sociis turpis montes luctus ultrices sem magnis dignissim, mi dui senectus commodo dapibus ullamcorper. Gravida ultricies curae quisque mi taciti per blandit risus non dis dui, phasellus nunc imperdiet elementum nibh nullam euismod nec etiam quis aptent cubilia, himenaeos sociis faucibus class tristique dignissim diam lobortis vestibulum placerat. Id congue libero volutpat justo blandit rhoncus hac purus nulla nam, fringilla magnis dapibus ridiculus integer sapien pellentesque accumsan aliquam torquent, per aenean vitae parturient primis mi placerat conubia montes.',
      province: 'Bengo',
      county: 'Luanda',
      street: 'Chicala 2',
    });
    server.create('organization', {
      _id: '2',
      name: 'Projecto Criança',
      coverImage: '/socialProjects/aprendizes-do-bem.jpg',
      responsible: 'Devsoft',
      totalVolunteers: 67,
      telephone: '222222222',
      email: 'porta@gmail.com',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit, sociis turpis montes luctus ultrices sem magnis dignissim, mi dui senectus commodo dapibus ullamcorper. Gravida ultricies curae quisque mi taciti per blandit risus non dis dui, phasellus nunc imperdiet elementum nibh nullam euismod nec etiam quis aptent cubilia, himenaeos sociis faucibus class tristique dignissim diam lobortis vestibulum placerat. Id congue libero volutpat justo blandit rhoncus hac purus nulla nam, fringilla magnis dapibus ridiculus integer sapien pellentesque accumsan aliquam torquent, per aenean vitae parturient primis mi placerat conubia montes.',
      province: 'Luanda',
      county: 'Luanda',
      street: 'Chicala 2',
    });
    server.create('organization', {
      _id: '3',
      name: 'Projecto Adulto',
      coverImage: '/socialProjects/arvore-do-saber.png',
      responsible: 'Portal do Volutário',
      totalVolunteers: 10,
      telephone: '222222222',
      email: 'porta@gmail.com',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit, sociis turpis montes luctus ultrices sem magnis dignissim, mi dui senectus commodo dapibus ullamcorper. Gravida ultricies curae quisque mi taciti per blandit risus non dis dui, phasellus nunc imperdiet elementum nibh nullam euismod nec etiam quis aptent cubilia, himenaeos sociis faucibus class tristique dignissim diam lobortis vestibulum placerat. Id congue libero volutpat justo blandit rhoncus hac purus nulla nam, fringilla magnis dapibus ridiculus integer sapien pellentesque accumsan aliquam torquent, per aenean vitae parturient primis mi placerat conubia montes.',
      province: 'Luanda',
      county: 'Luanda',
      street: 'Chicala 2',
    });
  },
});

function App() {
  return (
    <PageWrapper>
      <Header />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<SocialProjectsPage />} />
          <Route path='projectos-sociais' element={<SocialProjectsPage />} />
          <Route path='organizacoes' element={<Organizations />} />
          <Route path='organizacoes/:id' element={<OrganizationDetail />} />
        </Route>
        <Route path='iniciar-sessao' element={<div>INICIAR SESSÃO</div>} />
        <Route path='cadastrar' element={<div>CADASTRAR-SE</div>} />
      </Routes>
    </PageWrapper>
  );
}

export default App;
