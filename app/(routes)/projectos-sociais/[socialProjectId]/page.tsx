import { getSocialProjectById } from '@/actions/getSocialProjectById';
import { getCurrentUser } from '@/actions/getCurrentUser';
import Description from '@/(routes)/description';
import SinglePageWer from '@/components/singlePageWrapper';
import { SocialProject } from '@prisma/client';

interface IParams {
  socialProjectId: string;
}

const SingleProjectPage = async ({ params }: { params: IParams }) => {
  const socialProject = await getSocialProjectById(params);
  const currentUser = await getCurrentUser();

  return (
    <SinglePageWer>
      <Description
        typeOfData='socialProject'
        data={socialProject}
        currentUser={currentUser}
      />
    </SinglePageWer>
  );
};

export default SingleProjectPage;
