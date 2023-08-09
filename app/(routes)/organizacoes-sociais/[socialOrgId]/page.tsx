import { getCurrentUser } from '@/actions/getCurrentUser';
import { getSocialOrgById } from '@/actions/getSocialOrgById';
import SinglePageWrapper from '@/components/singlePageWrapper';
import Description from '@/(routes)/description';

interface IParams {
  socialOrgId: string;
}

const SingleOrgPage = async ({ params }: { params: IParams }) => {
  const socialOrg = await getSocialOrgById(params);
  const currentUser = await getCurrentUser();

  return (
    <SinglePageWrapper>
      <Description typeOfData='socialOrg' currentUser={currentUser} data={socialOrg} />
    </SinglePageWrapper>
  );
};

export default SingleOrgPage;
