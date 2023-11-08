import SmallCard from '../home/components/SmallCardsList';
import Wrapper from '../../_components/ContentWrapper';
import Heading from '@/components/heading';
import HorizontalRow from '@/components/HorizontalRow';
import { getCurrentUser } from '@/actions';
import { getQueryDescription } from '@/utils';

const SocialOrgsPage = async () => {
  const currentUser = await getCurrentUser();
  const queryDescritpion = getQueryDescription(
    'socialOrganizations',
    currentUser?.socialOrganizations
  );

  return (
    <section>
      <Heading
        title='Organizações sociais que faço parte'
        subtitle={queryDescritpion}
      />
      <HorizontalRow />
      <Wrapper>
        {currentUser?.socialOrganizations.map((organization) => (
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
