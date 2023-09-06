import { getCurrentUser } from '@/actions';
import SmallCard from '../home/components/SmallCardsList';
import HeaderTitle from '../../components/HeaderTitle';
import Wrapper from '../../components/ContentWrapper';

const SocialOrgsPage = async () => {
  const currentUser = await getCurrentUser();

  return (
    <section>
      <HeaderTitle>Organizações sociais que faço parte</HeaderTitle>
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
