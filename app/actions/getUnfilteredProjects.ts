import prisma from '@/libs/prismadb';
import { MOCKED_PROJECTS } from '@/data/socialProjects';

export async function getUnfilteredProjects() {
  try {
    // DATA FOR OFFLINE USE //
    const socialProjects = MOCKED_PROJECTS;
    // END DATA FOR OFFLINE USE //

    // const socialProjects = await prisma.socialProject.findMany();

    if (!socialProjects) {
      throw new Error('Não foi possível carregar os projectos sociais.');
    }

    return socialProjects;
  } catch (error: any) {
    throw new Error('Alguma coisa correu mal. Tente novamente.');
  }
}
