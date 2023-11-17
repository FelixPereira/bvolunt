import { getSocialOrgById } from '@/actions/getSocialOrgById';
import SinglePageWrapper from '@/components/singlePageWrapper';
import Description from '@/(routes)/description';

interface IParams {
  socialOrgId: string;
}

const SingleOrgPage = async ({ params }: { params: IParams }) => {
  const socialOrg = await getSocialOrgById(params.socialOrgId);
  const currentUser = null;

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
        currentUser={currentUser}
        data={socialOrg}
      />
    </SinglePageWrapper>
  );
};

export default SingleOrgPage;
