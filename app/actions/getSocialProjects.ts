import prisma from '@/libs/prismadb';
import { PAGE_SIZE, makeFilters } from '@/utils';
import { Prisma } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export interface IParams {
  provincia?: string;
  ordenar?: string;
  take?: number;
  skip?: number;
}

export async function getSocialProjects({
  provincia,
  ordenar,
  skip = 0,
  take = PAGE_SIZE,
}: IParams) {
  try {
    const socialProjects = await prisma.socialProject.findMany({
      take,
      skip,
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
      throw new Error('Nenhum projecto social encontrado.')
    }
    
    const totalProjects = await prisma.socialProject.count();

    revalidatePath('/');

    return {
      data: socialProjects,
      metaData: {
        hasNextPage: skip + take < totalProjects,
        totalPages: Math.ceil(totalProjects / take),
        totalProjects,
      },
    };
  } catch (error: any) {
    throw new Error('Alguma coisa correu mal. Tente novamente.');
  }
}
