import prisma from '../libs/prismadb';
import { formatToCapitalized } from '../utils';
import { ORGANIZATIONS } from '../data/organizations';

interface IParams {
  provincia: string;
  ordenar: string;
}
export async function getSocialOrganizations({ provincia, ordenar }: IParams) {
  try {
    let socialOrganizations = ORGANIZATIONS;
    // let socialOrganizations = await prisma.socialOrganization.findMany({
    //   orderby: {
    //     createdAt: 'desc',
    //   },
    // });

    if (provincia === 'todas') {
      socialOrganizations = socialOrganizations;
    }

    if (provincia && provincia !== 'todas') {
      socialOrganizations = socialOrganizations.filter((socialOrganization) => {
        return socialOrganization.province === formatToCapitalized(provincia);
      });
    }

    if (ordenar === 'antigos') {
      socialOrganizations = socialOrganizations.sort(
        (socialOrganizationA, socialOrganizationB) => {
          return (
            Number(new Date(socialOrganizationA.createdAt)) -
            Number(new Date(socialOrganizationB.createdAt))
          );
        }
      );
    }

    if (ordenar === 'recentes') {
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
