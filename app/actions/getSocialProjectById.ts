import prisma from '@/libs/prismadb';

import { MOCKED_SINGLE_PROJECT } from '@/data/socialProjects';

interface IParams {
  socialProjectId?: string;
}

export async function getSocialProjectById({ socialProjectId }: IParams) {
  try {
    // DATA FOR OFFLINE USE //
    const socialProject = MOCKED_SINGLE_PROJECT;
    // END DATA FOR OFFLINE USE //

    // const socialProject = await prisma.socialProject.findUnique({
    //   where: {
    //     id: socialProjectId,
    //   },
    //   include: {
    //     sponsors: {
    //       select: {
    //         id: true,
    //         logoUrl: true,
    //         name: true,
    //       },
    //     },
    //     socialOrganization: {
    //       select: {
    //         name: true,
    //         email: true,
    //         telephone: true,
    //       },
    //     },
    //     volunteers: {
    //       select: {
    //         id: true,
    //         avatar: true,
    //       },
    //     },
    //   },
    // });

    if (!socialProject) {
      throw new Error('Projecto não encontrado');
    }

    return {
      ...socialProject,
      createdAt: socialProject.createdAt.toISOString(),
      updatedAt: socialProject.updatedAt.toISOString(),
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
