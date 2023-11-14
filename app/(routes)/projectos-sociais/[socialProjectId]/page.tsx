import { getSocialProjectById } from '@/actions/getSocialProjectById';
import { getCurrentUser } from '@/actions/getCurrentUser';
import Description from '@/(routes)/description';
import SinglePageWrapper from '@/components/singlePageWrapper';

interface IParams {
  socialProjectId: string;
}

const SingleProjectPage = async ({ params }: { params: IParams }) => {
  const socialProject = await getSocialProjectById(params);
  const currentUser = null;

  const metaDatas = [
    {
      label: 'Responsável',
      data: socialProject.socialOrganization.name,
    },
    {
      label: 'Telefone do responsável',
      data: socialProject.socialOrganization.telephone,
    },
    {
      label: 'Email do responsável',
      data: socialProject.socialOrganization.email,
    },
    {
      label: 'Participantes',
      data: socialProject.volunteerIDs.length,
    },
    {
      label: 'Localização',
      data: `${socialProject.address}, ${socialProject.county}, ${socialProject.province}`,
    },
  ];

  return (
    <SinglePageWrapper>
      <Description
        typeOfData='socialProject'
        data={socialProject}
        currentUser={currentUser}
        metaDatas={metaDatas}
        sponsors={socialProject.sponsors}
      />
    </SinglePageWrapper>
  );
};

export default SingleProjectPage;
