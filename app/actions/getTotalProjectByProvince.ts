import { SOCIALPROJECTS } from '@/app/data/socialProjects';
import prisma from '../libs/prismadb';

export async function getTotalProjects() {
  // const totalProjects = await prisma.socialProject.findMany();

  return SOCIALPROJECTS;
}
