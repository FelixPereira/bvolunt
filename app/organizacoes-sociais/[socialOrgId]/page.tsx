import { getCurrentUser } from '@/app/actions/getCurrentUser';
import { getSocialOrgById } from '@/app/actions/getSocialOrgById';
import SinglePageWrapper from '@/app/components/singlePageWrapper';
import SocialProjectDescription from '@/app/projectos-sociais/[socialProjectId]/SocialProjectDescription';

interface IParams {
  socialOrgId: string;
}

const SingleOrgPage = async ({params}: {params: IParams}) => {
  const socialOrg = await getSocialOrgById(params);
  const currentUser = await getCurrentUser();

  return (
    <SinglePageWrapper>
      <SocialProjectDescription currentUser={currentUser} data={socialOrg} />
    </SinglePageWrapper>
  );
};

export default SingleOrgPage;
