import prisma from '@/libs/prismadb';
import { makeFilters } from './getSocialProjects';
import { Prisma } from '@prisma/client';

interface IParams {
  provincia?: string;
  ordenar?: string;
}
export async function getSocialOrganizations({ provincia, ordenar }: IParams) {
  try {
    const socialOrganizations = await prisma.socialOrganization.findMany({
      orderBy: {
        createdAt: makeFilters({ ordenar }).order as Prisma.SortOrder,
      },
      where: {
        province: makeFilters({ provincia }).province,
      },
    });
    // let socialOrganizations = ORGANIZATIONS.sort(
    //   (socialOrganizationA, socialOrganizationB) => {
    //     return (
    //       Number(new Date(socialOrganizationB.createdAt)) -
    //       Number(new Date(socialOrganizationA.createdAt))
    //     );
    //   }
    // );

    // if (provincia === 'todas') {
    //   socialOrganizations = socialOrganizations;
    // }

    // if (provincia && provincia !== 'todas') {
    //   socialOrganizations = socialOrganizations.filter((socialOrganization) => {
    //     return socialOrganization.province === formatToCapitalized(provincia);
    //   });
    // }

    // if (ordenar === 'antigos') {
    //   socialOrganizations = socialOrganizations.sort(
    //     (socialOrganizationA, socialOrganizationB) => {
    //       return (
    //         Number(new Date(socialOrganizationA.createdAt)) -
    //         Number(new Date(socialOrganizationB.createdAt))
    //       );
    //     }
    //   );
    // }

    // if (ordenar === 'recentes') {
    //   socialOrganizations = socialOrganizations.sort(
    //     (socialOrganizationA, socialOrganizationB) => {
    //       return (
    //         Number(new Date(socialOrganizationB.createdAt)) -
    //         Number(new Date(socialOrganizationA.createdAt))
    //       );
    //     }
    //   );
    // }
    /////////////////////////////////////////////////////////////

    return socialOrganizations;
  } catch (error: any) {
    throw new Error(error);
  }
}
