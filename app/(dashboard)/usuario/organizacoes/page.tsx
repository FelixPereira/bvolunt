import { getCurrentUser } from '@/actions';
import SmallCard from '../home/components/smallCard';
import HeaderTitle from '../headerTitle';
import Wrapper from '../contentWrapper';

const Organizations = async () => {
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
            text1={organization.responsibleName}
            text2={organization.province}
          />
        ))}
      </Wrapper>
    </section>
  );
};

export default Organizations;
