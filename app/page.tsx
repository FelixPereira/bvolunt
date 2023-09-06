import { getSocialProjects } from '@/actions/getSocialProjects';
import { getCurrentUser } from '@/actions/getCurrentUser';
import { getSocialOrganizations } from '@/actions/getSocialOrganizations';
import Container from '@/components/Container';
import CardsList from '@/components/cards/cardsList';
import BaseCard from '@/components/cards/baseCard';
import SectionHeader from '@/components/homeSectionHeader';

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
            <SectionHeader typeOfData='projects' />
            <CardsList cols={4}>
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
            <SectionHeader typeOfData='organizations' />
            <CardsList cols={4}>
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
