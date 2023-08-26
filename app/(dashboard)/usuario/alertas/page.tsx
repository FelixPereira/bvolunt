import { getCurrentUser } from '@/actions';
import SmallCard from '../home/components/smallCard';
import HeaderTitle from '../headerTitle';

const Organizations = async () => {
  const currentUser = await getCurrentUser();

  return (
    <section>
      <HeaderTitle>Alertas.</HeaderTitle>
      <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {currentUser?.events.map((event) => (
          <SmallCard
            key={event.id}
            title={event.name}
            url={`/eventos-sociais/${event.id}`}
            text1={event.date.toLocaleDateString()}
          />
        ))}
      </div>
    </section>
  );
};

export default Organizations;
