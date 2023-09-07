import { getCurrentUser } from '@/actions';
import SmallCard from '../home/components/SmallCardsList';
import HeaderTitle from '../../components/HeaderTitle';
import Wrapper from '../../components/ContentWrapper';

const AlertsPage = async () => {
  const currentUser = await getCurrentUser();

  return (
    <section>
      <HeaderTitle>Alertas.</HeaderTitle>
      <Wrapper>
        {currentUser?.events.map((event) => (
          <SmallCard
            key={event.id}
            title={event.title}
            url={`/eventos-sociais/${event.id}`}
            primaryText={event.startDate.toLocaleDateString()}
          />
        ))}
      </Wrapper>
    </section>
  );
};

export default AlertsPage;
