import HorizontalRow from '@/components/HorizontalRow';
import Heading from '@/components/heading';
import ButtomWrapper from '../_components/ButtomWrapper';
import { getCurrentUser } from '@/actions';
import { getOrgDashBoardData } from '@/actions/getOrgDashboardData';
import { getQueryDescription } from '@/utils';
// import SmallCardsList from '../../_components/SmallCardsList';
// import Wrapper from '../../_components/ContentWrapper';

const SocialProjectsPage = async () => {
  const currentOrg = await getCurrentUser();
  const { socialProjects } = await getOrgDashBoardData(currentOrg?.id);
  const queryDescription = getQueryDescription(
    'socialProjects',
    socialProjects
  );

  return (
    <section>
      <Heading title='Meus projectos sociais' subtitle={queryDescription} />
      <HorizontalRow />

      <div className='flex items-center justify-between mt-8'>
        <div className='flex items-center gap-y-2'>
          <span className='flex flex-col gap-x-2 bg-secondary'>
            <label htmlFor='#'>Texto da pesquisa</label>
            <input type='text' />
          </span>
          <span className='flex flex-col gap-x-2 bg-secondary'>
            <label htmlFor='#'>Por localidade</label>
            <input type='text' />
          </span>
        </div>
        <ButtomWrapper />
      </div>
      {/* <Wrapper>
        {socialProjects?.map((project) => (
          <SmallCardsList
            key={project.id}
            title={project.name}
            url={`projectos-sociais/${project.id}`}
            primaryText={project.socialOrganization.name}
            secondaryText={project.province}
          />
        ))}
      </Wrapper> */}
    </section>
  );
};

export default SocialProjectsPage;
