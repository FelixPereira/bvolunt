import prisma from '@/libs/prismadb';
import { NextResponse } from 'next/server';
// import { SINGLE_SOCIAL_PROJECT } from '../data/socialProjects';

interface IParams {
  socialProjectId?: string;
}

export async function getSocialProjectById({ socialProjectId }: IParams) {
  try {
    // const socialProject = SINGLE_SOCIAL_PROJECT;
    const socialProject = await prisma.socialProject.findUnique({
      where: {
        id: socialProjectId,
      },
      // include: {
      //   organizationOwner: true,
      // },
    });

    if (!socialProject) {
      // return NextResponse.json(
      //   { message: 'Projecto não encontrado' },
      //   { status: 404 }
      // );
      return;
    }

    return {
      ...socialProject,
      createdAt: socialProject.createdAt.toISOString(),
      updatedAt: socialProject.updatedAt.toISOString(),
    };
  } catch (error: any) {
    const status = error.status || 500;
    throw new Error(error);
    // return NextResponse.json({ message: error.message }, { status: status });
  }
}
