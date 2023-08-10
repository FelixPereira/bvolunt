import { SOCIALPROJECTS } from '@/data/socialProjects';
import prisma from '@/libs/prismadb';

export async function getUnfilteredProjects() {
  try {
    const socialProjects = await prisma.socialProject.findMany();

    // STATIC DATA TO WORK OFFLINE
    // const socialProjects = SOCIALPROJECTS;

    if (!socialProjects) {
      throw new Error('Não foi possível carregar os projectos sociais.');
    }

    return socialProjects;
  } catch (erro: any) {
    throw new Error('Alguma coisa correu mal. Tente novamente.');
  }
}
