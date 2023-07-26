import { getCurrentUser } from '@/app/actions/getCurrentUser';
import { getSocialOrgById } from '@/app/actions/getSocialOrgById';
import SinglePageWrapper from '@/app/components/singlePageWrapper';
import Description from '../../description';

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
