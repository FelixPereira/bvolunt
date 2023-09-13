import { getCurrentUser } from '@/actions';
import SmallCard from '../home/components/SmallCardsList';
import HeaderTitle from '../../components/HeaderTitle';
import Wrapper from '../../components/ContentWrapper';

const SocialProjectsPage = async () => {
  const currentUser = await getCurrentUser();

  return (
    <section>
      <HeaderTitle>Projectos sociais que faço parte</HeaderTitle>
      <Wrapper>
        {currentUser?.socialProjects.map((project) => (
          <SmallCard
            key={project.id}
            title={project.name}
            url={`/projectos-sociais/${project.id}`}
            primaryText={project.socialOrganization.name}
            secondaryText={project.province}
          />
        ))}
      </Wrapper>
    </section>
  );
};

export default SocialProjectsPage;
