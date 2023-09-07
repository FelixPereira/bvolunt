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

    return socialOrganizations;
  } catch (error: any) {
    throw new Error(error);
  }
}
