import prisma from '@/libs/prismadb';

import { formatToCapitalized } from '@/utils';
import { Prisma } from '@prisma/client';

export const makeFilters = ({ provincia, ordenar }: IParams) => {
  const province =
    provincia === 'todas' || !provincia
      ? undefined
      : formatToCapitalized(provincia);

  const order = ordenar === 'recentes' || !ordenar ? 'desc' : 'asc';

  return {
    province,
    order,
  };
};

interface IParams {
  provincia?: string;
  ordenar?: string;
}

export async function getSocialProjects({ provincia, ordenar }: IParams) {
  try {
    const socialProjects = await prisma.socialProject.findMany({
      orderBy: {
        createdAt: makeFilters({ ordenar }).order as Prisma.SortOrder,
      },

      where: {
        province: makeFilters({ provincia }).province,
      },
      include: {
        socialOrganization: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!socialProjects) {
      throw new Error('Não foi possível carregar as organizações.');
    }

    return socialProjects;
  } catch (error: any) {
    throw new Error('Alguma coisa correu mal. Tente novamente.');
  }
}
