import Container from './components/Container';
// import { SOCIALPROJECTS } from '@/data/socialProjects';
import { getSocialProjects } from './actions/getSocialProjects';
import { getCurrentUser } from './actions/getCurrentUser';
import Heading from './components/heading';
import { getSocialOrganizations } from './actions/getSocialOrganizations';
import CardsList from './components/cards/cardsList';
import BaseCard from './components/cards/baseCard';

interface IParams {
  province: any;
  orderby: any;
}

export default async function Home({ params }: { params: IParams }) {
  const socialProjects = await getSocialProjects(params);
  const socialOrganizations = await getSocialOrganizations(params);
  const currentUser = await getCurrentUser();

  return (
    <main>
      <Container>
        <div>
          <div className='mb-10'>
            <Heading
              title='Projectos sociais mais recentes'
              subtitle='Novos projectos socials'
            />
            <CardsList>
              {socialProjects.map((socialProject) => (
                <BaseCard
                  key={socialProject.id}
                  currentUser={currentUser}
                  data={socialProject}
                  typeOfData='projectos-sociais'
                />
              ))}
            </CardsList>
          </div>
          <div>
            <Heading
              title='Organizações socias mais recentes'
              subtitle='Novas organizaçoes socials'
            />
            <CardsList>
              {socialOrganizations.map((socialOrganization) => (
                <BaseCard
                  key={socialOrganization.id}
                  currentUser={currentUser}
                  data={socialOrganization}
                  typeOfData='organizacoes-sociais'
                />
              ))}
            </CardsList>
          </div>
        </div>
      </Container>
    </main>
  );
}
