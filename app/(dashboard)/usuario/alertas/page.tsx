import { getCurrentUser } from '@/actions';
import SmallCard from '../home/components/SmallCardsList';
import HeaderTitle from '../../components/HeaderTitle';
import Wrapper from '../../components/ContentWrapper';
import { formatDate } from '@/utils';

const AlertsPage = async () => {
  const currentUser = await getCurrentUser();

  return (
    <section>
      <HeaderTitle>Alertas.</HeaderTitle>
      <Wrapper>
        {currentUser?.events.map((event: any) => (
          <SmallCard
            key={event.id}
            title={event.title}
            url={`/eventos-sociais/${event.id}`}
            primaryText={formatDate(event.startDate)}
          />
        ))}
      </Wrapper>
    </section>
  );
};

export default AlertsPage;
