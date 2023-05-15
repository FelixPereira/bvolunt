import prisma from '../libs/prismadb';

export async function getSocialProjects() {
  const socialProjects = await prisma.socialProject.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return socialProjects;
}
