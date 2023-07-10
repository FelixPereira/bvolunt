import prisma from '../libs/prismadb';
import { formatToCapitalized } from '../utils';
import { ORGANIZATIONS } from '../data/organizations';

interface IParams {
  province: string;
  orderby: string;
}
export async function getSocialOrganizations({ province, orderby }: IParams) {
  try {
    let socialOrganizations = ORGANIZATIONS;
    // let socialOrganizations = await prisma.socialOrganization.findMany({
    //   orderBy: {
    //     createdAt: 'desc',
    //   },
    // });

    if (province === 'todas') {
      socialOrganizations = socialOrganizations;
    }

    if (province && province !== 'todas') {
      socialOrganizations = socialOrganizations.filter((socialOrganization) => {
        return socialOrganization.province === formatToCapitalized(province);
      });
    }

    if (orderby === 'asc') {
      socialOrganizations = socialOrganizations.sort(
        (socialOrganizationA, socialOrganizationB) => {
          return (
            Number(new Date(socialOrganizationA.createdAt)) -
            Number(new Date(socialOrganizationB.createdAt))
          );
        }
      );
    }

    if (orderby === 'desc') {
      socialOrganizations = socialOrganizations.sort(
        (socialOrganizationA, socialOrganizationB) => {
          return (
            Number(new Date(socialOrganizationB.createdAt)) -
            Number(new Date(socialOrganizationA.createdAt))
          );
        }
      );
    }

    return socialOrganizations;
  } catch (error: any) {
    throw new Error(error);
  }
}
