import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';
import { getCurrentUser } from '@/app/actions/getCurrentUser';

interface IParams {
  socialProjectId: string;
}

export async function POST(
  request: Request,
  {
    params,
  }: {
    params: IParams;
  }
) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.error();
    }

    const { socialProjectId } = params;

    const socialProject = await prisma.socialProject.findUnique({
      where: {
        id: socialProjectId,
      },
    });

    if (!socialProject) {
      return NextResponse.error();
    }

    if (currentUser.socialProjectsIds.includes(socialProjectId)) {
      return NextResponse.json('Este projecto já foi adicionado');
    }

    let socialProjectsList = currentUser.socialProjectsIds;
    socialProjectsList.push(socialProjectId);

    const updatedUser = await prisma.volunteer.update({
      where: {
        id: currentUser.id,
      },
      data: {
        socialProjectsIds: socialProjectsList,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function DELETE(
  request: Request,
  {
    params,
  }: {
    params: IParams;
  }
) {
  try {
    let currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.error();
    }

    const { socialProjectId } = params;
    if (!socialProjectId || typeof socialProjectId !== 'string') {
      throw new Error('Id de projecto inválido');
    }

    if (!currentUser.socialProjectsIds.includes(socialProjectId)) {
      throw new Error('Projecto não encontrado');
    }

    const socialProjectsList = currentUser.socialProjectsIds.filter(
      (socialProject) => socialProject !== socialProjectId
    );

    const updatedUser = await prisma.volunteer.update({
      where: {
        id: currentUser.id,
      },
      data: {
        socialProjectsIds: socialProjectsList,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error: any) {
    throw new Error(error);
  }
}
