import { getCurrentUser } from '@/actions';
import SmallCard from '../home/components/SmallCardsList';

import Wrapper from '../../_components/ContentWrapper';
import Heading from '@/components/heading';
import { getQueryDescription } from '@/utils';
import HorizontalRow from '@/components/HorizontalRow';

const SocialProjectsPage = async () => {
  const currentUser = await getCurrentUser();
  const queryDescritpion = getQueryDescription(
    'socialOrganizations',
    currentUser?.socialProjects
  );

  return (
    <section>
      <Heading
        title='Projectos sociais que faço parte'
        subtitle={queryDescritpion}
      />
      <HorizontalRow />
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
