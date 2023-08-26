import { getCurrentUser } from '@/actions';
import SmallCard from '../home/components/smallCard';
import HeaderTitle from '../headerTitle';
import Wrapper from '../contentWrapper';

const Organizations = async () => {
  const currentUser = await getCurrentUser();

  return (
    <section>
      <HeaderTitle>Eventos agendados.</HeaderTitle>
      <Wrapper>
        {currentUser?.events.map((event) => (
          <SmallCard
            key={event.id}
            title={event.name}
            url={`/eventos-sociais/${event.id}`}
            text1={`${event.location} - ${event.date.toLocaleDateString()}`}
          />
        ))}
      </Wrapper>
    </section>
  );
};

export default Organizations;
