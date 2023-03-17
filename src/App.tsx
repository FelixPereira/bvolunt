import { Routes, Route } from 'react-router-dom';
import { createServer, Model, Registry } from 'miragejs';
import { ModelDefinition } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';

import { Header } from './components/header';
import { Layout } from './components/layout';
import { SocialProjectsPage } from './pages/socialProjectsPage';
import { PageWrapper } from './GlobalStyle';
import { Organizations } from './pages/organizations';
import { OrganizationDetail } from './pages/organizationDetail';
import { OrganizationType } from './components/organization/type';
import { SocialProjectType } from './components/socialProject/type';

import { ORGANIZATIONS } from './store/organizations';
import { SOCIALPROJECTS } from './store/socialProjects';

const OrganizationModel: ModelDefinition<OrganizationType> = Model.extend({});
const SocialProjectModel: ModelDefinition<SocialProjectType> = Model.extend({});

type AppRegistry = Registry<
  {
    organization: typeof OrganizationModel;
  },
  {
    socialProject: typeof SocialProjectModel;
  }
>;

type AppSchema = Schema<AppRegistry>;

createServer({
  models: {
    organization: OrganizationModel,
    socialProject: SocialProjectModel,
  },

  routes() {
    this.namespace = 'api';

    this.get('/organizations', (schema: AppSchema) => {
      return schema.all('organization');
    });

    this.get('/organizations/:id', (schema: AppSchema, request) => {
      const id = request.params.id;
      return schema.find('organization', id);
    });

    this.get('/social-projects', (schema: AppSchema) => {
      return schema.all('socialProject');
    });
  },

  seeds(server) {
    server.db.loadData({
      organizations: ORGANIZATIONS,
      socialProjects: SOCIALPROJECTS,
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
