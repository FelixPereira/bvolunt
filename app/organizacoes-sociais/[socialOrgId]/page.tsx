import { getSocialOrgById } from '@/app/actions/getSocialOrgById';
import Container from '@/app/components/Container';

interface IParams {
  socialOrgId: string;
}

const SingleOrgPage = async ({params}: {params: IParams}) => {
  const socialOrg = await getSocialOrgById(params);
  console.log(socialOrg);

  return (
    <main>
      <Container>
        <div>{socialOrg.name}</div>
      </Container>
    </main>
  );
};

export default SingleOrgPage;
