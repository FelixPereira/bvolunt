import { getCurrentUser } from '@/actions';
import SmallCard from '../home/components/smallCard';
import HeaderTitle from '../headerTitle';
import Wrapper from '../contentWrapper';

const Organizations = async () => {
  const currentUser = await getCurrentUser();

  return (
    <section>
      <HeaderTitle>Projectos sociais que faço parte.</HeaderTitle>
      <Wrapper>
        {currentUser?.socialProjects.map((project) => (
          <SmallCard
            key={project.id}
            title={project.name}
            url={`/projectos-sociais/${project.id}`}
            text1={project.responsibleName}
            text2={project.province}
          />
        ))}
      </Wrapper>
    </section>
  );
};

export default Organizations;
