import { getCurrentUser } from '@/actions';
import SmallCard from '../home/components/smallCard';
import HeaderTitle from '../headerTitle';

const Organizations = async () => {
  const currentUser = await getCurrentUser();

  return (
    <section>
      <HeaderTitle>Organizações sociais que faço parte.</HeaderTitle>
      <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {currentUser?.socialOrganizations.map((organization) => (
          <SmallCard
            key={organization.id}
            title={organization.name}
            url={`/organizacoes-sociais/${organization.id}`}
            text1={organization.responsibleName}
            text2={organization.province}
          />
        ))}
      </div>
    </section>
  );
};

export default Organizations;
