import SmallCard from '../home/components/SmallCardsList';
import Wrapper from '../../_components/ContentWrapper';
import Heading from '@/components/heading';
import HorizontalRow from '@/components/HorizontalRow';
import { getCurrentUser, getUserDashboardData } from '@/actions';
import { getQueryDescription } from '@/utils';

const SocialOrgsPage = async () => {
  const currentUser = await getCurrentUser();
  const { socialOrgs } = await getUserDashboardData(currentUser?.id);
  const queryDescritpion = getQueryDescription(
    'socialOrganizations',
    socialOrgs
  );

  return (
    <section>
      <Heading
        title='Organizações sociais que faço parte'
        subtitle={queryDescritpion}
      />
      <HorizontalRow />
      <Wrapper>
        {socialOrgs?.map((organization) => (
          <SmallCard
            key={organization.id}
            title={organization.name}
            url={`/organizacoes-sociais/${organization.id}`}
            primaryText={organization.responsibleName}
            secondaryText={organization.province}
          />
        ))}
      </Wrapper>
    </section>
  );
};

export default SocialOrgsPage;
