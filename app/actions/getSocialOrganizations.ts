import prisma from '@/libs/prismadb';
import { makeFilters } from './getSocialProjects';
import { Prisma } from '@prisma/client';

import { MOCKED_SOCIAL_ORGS } from '@/data/organizations';

interface IParams {
  provincia?: string;
  ordenar?: string;
}
export async function getSocialOrganizations({ provincia, ordenar }: IParams) {
  try {
    // DATA FOR OFFLINE USE //
    const socialOrganizations = MOCKED_SOCIAL_ORGS;
    // END DATA FOR OFFLINE USE //

    // const socialOrganizations = await prisma.socialOrganization.findMany({
    //   orderBy: {
    //     createdAt: makeFilters({ ordenar }).order as Prisma.SortOrder,
    //   },
    //   where: {
    //     province: makeFilters({ provincia }).province,
    //   },
    // });

    if (!socialOrganizations) {
      throw new Error('Nenhuma organização encontrada.');
    }

    return socialOrganizations;
  } catch (error: any) {
    throw new Error(error);
  }
}
