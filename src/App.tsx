import { Routes, Route } from 'react-router-dom';
import { createServer, Model, Registry } from 'miragejs';
import { ModelDefinition } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';

import { Header } from './components/header';
import { Layout } from './components/layout';
import { PageWrapper } from './GlobalStyle';
import { SocialProjectsPage } from './pages/socialProjectsPage';
import { OrganizationsPage } from './pages/organizationsPage';
import { OrganizationDetail } from './pages/organizationDetail';
import { SocialProjectDetail } from './pages/socialProjectDetail';
import { OrganizationType } from './components/organization/type';
import { SocialProjectType } from './components/socialProject/type';

import { ORGANIZATIONS } from './data/organizations';
import { SOCIALPROJECTS } from './data/socialProjects';

type Org = {
  id: number;
  name: string;
};

type Proj = {
  id: number;
  name: string;
};

interface Province {
  id: number;
  name: string;
  slug: string;
  organizations: Org[];
  socialProjects: Proj[];
}

const OrganizationModel: ModelDefinition<OrganizationType> = Model.extend({});
const SocialProjectModel: ModelDefinition<SocialProjectType> = Model.extend({});
const ProvinceModel: ModelDefinition<Province> = Model.extend({});

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
      const id: string = request.params.id;

      return schema.find('organization', id);
    });

    this.get('/social-projects', (schema: AppSchema) => {
      return schema.all('socialProject');
    });

    this.get('/social-projects/:id', (schema: AppSchema, request) => {
      const id = request.params.id;
      return schema.find('socialProject', id);
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
          <Route path='organizacoes' element={<OrganizationsPage />} />
        </Route>
        <Route path='organizacoes/:id' element={<OrganizationDetail />} />
        <Route path='projectos-sociais/:id' element={<SocialProjectDetail />} />
        <Route path='iniciar-sessao' element={<div>INICIAR SESSÃO</div>} />
        <Route path='cadastrar' element={<div>CADASTRAR-SE</div>} />
      </Routes>
    </PageWrapper>
  );
}

export default App;
