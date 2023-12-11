import prisma from '@/libs/prismadb';
import { PAGE_SIZE, makeFilters } from '@/utils';
import { Prisma } from '@prisma/client';
import { revalidatePath } from 'next/cache';

interface IParams {
  provincia?: string;
  ordenar?: string;
  take?: number;
  skip?: number;
}

export async function getSocialOrganizations({
  provincia,
  ordenar,
  skip = 0,
  take = PAGE_SIZE,
}: IParams) {
  try {
    const socialOrganizations = await prisma.socialOrganization.findMany({
      take,
      skip,
      orderBy: {
        createdAt: makeFilters({ ordenar }).order as Prisma.SortOrder,
      },
      where: {
        province: makeFilters({ provincia }).province,
      },
    });

    if (!socialOrganizations) {
      throw new Error('Nenhuma organização encontrada.');
    }

    const totalOrgs = await prisma.socialOrganization.count();

    revalidatePath('/');

    return {
      data: socialOrganizations,
      metaData: {
        hasNextPage: skip + take < totalOrgs,
        totalPages: Math.ceil(totalOrgs / take),
        totalOrgs,
      },
    };
  } catch (error: any) {
    console.log(error);
    throw new Error('Alguma coisa correu mal. Tente novamente');
  }
}
