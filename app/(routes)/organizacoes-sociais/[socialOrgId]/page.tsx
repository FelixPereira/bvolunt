import { getSocialOrgById } from '@/actions/getSocialOrgById';
import SinglePageWrapper from '@/components/singlePageWrapper';
import Description from '@/(routes)/description';
import { getCurrentUser, getUser } from '@/actions';
import { AccountType } from '@prisma/client';

interface IParams {
  socialOrgId: string;
}

const SingleOrgPage = async ({ params }: { params: IParams }) => {
  const socialOrg = await getSocialOrgById(params.socialOrgId);
  const loggedInUserAccount = await getCurrentUser();
  const curreentUser = await getUser(loggedInUserAccount?.email);

  let currentUserData: {
    accountType: AccountType;
    socialOrganizationIDs?: string[];
    socialProjectIDs?: string[];
  } | null = null;

  if (loggedInUserAccount?.accountType === AccountType.ORGANIZATION) {
    currentUserData = {
      accountType: AccountType.ORGANIZATION,
    };
  } else if (loggedInUserAccount?.accountType === AccountType.USER) {
    currentUserData = {
      accountType: AccountType.USER,
      socialOrganizationIDs: curreentUser?.socialOrganizationIDs,
      socialProjectIDs: curreentUser?.socialProjectIDs,
    };
  }

  const metaDatas = [
    {
      label: 'Responsável',
      data: socialOrg.responsibleName,
    },

    {
      label: 'Telefone do responsável',
      data: socialOrg.responsiblePhone,
    },
    {
      label: 'Email do responsável',
      data: socialOrg.responsibleEmail,
    },
    {
      label: 'Participantes',
      data: socialOrg.volunteerIDs.length,
    },
    {
      label: 'Localização',
      data: `${socialOrg.address}, ${socialOrg.county}, ${socialOrg.province}`,
    },
  ];

  return (
    <SinglePageWrapper>
      <Description
        metaDatas={metaDatas}
        sponsors={socialOrg.sponsors}
        typeOfData='socialOrg'
        data={socialOrg}
        currentUserData={currentUserData}
      />
    </SinglePageWrapper>
  );
};

export default SingleOrgPage;
