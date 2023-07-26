import { getSocialProjectById } from '@/app/actions/getSocialProjectById';
import { getCurrentUser } from '@/app/actions/getCurrentUser';
import Description from '../../description';
import SinglePageWrapper from '@/app/components/singlePageWrapper';
import { SocialProject } from '@prisma/client';

interface IParams {
  socialProjectId: string;
}

const SingleProjectPage = async ({ params }: { params: IParams }) => {
  const socialProject = await getSocialProjectById(params);
  const currentUser = await getCurrentUser();

  return (
    <SinglePageWrapper>
      <Description typeOfData='socialProject' data={socialProject} currentUser={currentUser} />
    </SinglePageWrapper>
  );
};

export default SingleProjectPage;
