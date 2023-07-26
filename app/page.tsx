import Container from './components/Container';
import { getSocialProjects } from './actions/getSocialProjects';
import { getCurrentUser } from './actions/getCurrentUser';
import Heading from './components/heading';
import { getSocialOrganizations } from './actions/getSocialOrganizations';
import CardsList from './components/cards/cardsList';
import BaseCard from './components/cards/baseCard';

interface IParams {
  provincia: any;
  ordenar: any;
}

export default async function Home({ params }: { params: IParams }) {
  const socialProjects = await getSocialProjects(params);
  const socialOrganizations = await getSocialOrganizations(params);
  const currentUser = await getCurrentUser();

  return (
    <main>
      <Container>
        <div>
          <div className='mb-20'>
            <Heading
              title='Projectos sociais'
              subtitle='Projectos sociais adicionados recentemente'
            />
            <CardsList>
              {socialProjects.slice(0, 4).map((socialProject) => (
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
              title='Organizações socias'
              subtitle='Organizações sociais adicionadas recentemente'
            />
            <CardsList>
              {socialOrganizations.slice(0, 4).map((socialOrganization) => (
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
