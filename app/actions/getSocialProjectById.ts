import prisma from '@/app/libs/prismadb';

interface IParams {
  socialProjectId?: string;
}

export async function getSocialProjectById({ socialProjectId }: IParams) {
  try {
    const socialProject = await prisma.socialProject.findUnique({
      where: {
        id: socialProjectId,
      },
      // include: {
      //   organizationOwner: true,
      // },
    });

    if (!socialProject) return null;

    return {
      ...socialProject,
      createdAt: socialProject.createdAt.toISOString(),
      updatedAt: socialProject.updatedAt.toISOString(),
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
