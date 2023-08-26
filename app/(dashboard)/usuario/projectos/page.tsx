import { getCurrentUser } from '@/actions';
import SmallCard from '../home/components/smallCard';
import HeaderTitle from '../headerTitle';

const Organizations = async () => {
  const currentUser = await getCurrentUser();

  return (
    <section>
      <HeaderTitle>Projectos sociais que faço parte.</HeaderTitle>
      <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {currentUser?.socialProjects.map((project) => (
          <SmallCard
            key={project.id}
            title={project.name}
            url={`/projectos-sociais/${project.id}`}
            text1={project.responsibleName}
            text2={project.province}
          />
        ))}
      </div>
    </section>
  );
};

export default Organizations;
