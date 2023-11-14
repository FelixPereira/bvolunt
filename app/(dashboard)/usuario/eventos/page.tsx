import SmallCard from '../home/components/SmallCardsList';
import Wrapper from '../../_components/ContentWrapper';
import Heading from '@/components/heading';
import HorizontalRow from '@/components/HorizontalRow';
import { getCurrentUser } from '@/actions';
import { formatDate, getQueryDescription } from '@/utils';
import { getUserDashboardData } from '@/actions/getUserDashboardData';

const EventsPage = async () => {
  const currentUser = await getCurrentUser();
  const { events } = await getUserDashboardData(currentUser?.id);
  const queryDescritpion = getQueryDescription('socialOrganizations', events);

  return (
    <section>
      <Heading
        title='Eventos sociais que faço parte'
        subtitle={queryDescritpion}
      />
      <HorizontalRow />
      <Wrapper>
        {events?.map((event) => (
          <SmallCard
            key={event.id}
            title={event.title}
            url={`/eventos-sociais/${event.id}`}
            primaryText={`${event.county}, ${event.province}`}
            secondaryText={`${formatDate(event.startDate)} - ${formatDate(
              event.endDate
            )}`}
          />
        ))}
      </Wrapper>
    </section>
  );
};

export default EventsPage;
