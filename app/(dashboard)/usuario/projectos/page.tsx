import { getCurrentUser, getUserDashboardData } from '@/actions';
import { getQueryDescription } from '@/utils';
import SmallCard from '../home/components/SmallCardsList';
import Wrapper from '../../_components/ContentWrapper';
import Heading from '@/components/heading';
import HorizontalRow from '@/components/HorizontalRow';

const SocialProjectsPage = async () => {
  const currentUser = await getCurrentUser();
  const { socialProjects } = await getUserDashboardData(currentUser?.id);
  const queryDescritpion = getQueryDescription(
    'socialOrganizations',
    socialProjects
  );

  return (
    <section>
      <Heading
        title='Projectos sociais que faço parte'
        subtitle={queryDescritpion}
      />
      <HorizontalRow />
      <Wrapper>
        {socialProjects?.map((project) => (
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
