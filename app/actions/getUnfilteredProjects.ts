import prisma from '@/libs/prismadb';

export async function getUnfilteredProjects() {
  try {
    const socialProjects = await prisma.socialProject.findMany({
      include: {
        socialOrganization: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!socialProjects) {
      throw new Error('Não foi possível carregar os projectos sociais.');
    }

    return socialProjects;
  } catch (error: any) {
    throw new Error('Alguma coisa correu mal. Tente novamente.');
  }
}
