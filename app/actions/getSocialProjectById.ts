import prisma from '@/libs/prismadb';

interface IParams {
  socialProjectId?: string;
}

export async function getSocialProjectById({ socialProjectId }: IParams) {
  try {
    const socialProject = await prisma.socialProject.findUnique({
      where: {
        id: socialProjectId,
      },
      include: {
        sponsors: {
          select: {
            id: true,
            logoUrl: true,
            name: true,
          },
        },
        socialOrganization: {
          select: {
            name: true,
            email: true,
            telephone: true,
          },
        },
        volunteers: {
          select: {
            id: true,
            avatar: true,
          },
        },
      },
    });

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