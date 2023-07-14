import { getSocialProjectById } from '@/app/actions/getSocialProjectById';
import { getCurrentUser } from '@/app/actions/getCurrentUser';
import SocialProjectDescription from './SocialProjectDescription';
import SinglePageWrapper from '@/app/components/singlePageWrapper';

interface IParams {
  socialProjectId: string;
}

const SingleProjectPage = async ({ params }: { params: IParams }) => {
  const socialProject = await getSocialProjectById(params);
  const currentUser = await getCurrentUser();

  return (
    <SinglePageWrapper>
      <SocialProjectDescription
        data={socialProject}
        currentUser={currentUser}
      />
    </SinglePageWrapper>
  );
};

export default SingleProjectPage;
