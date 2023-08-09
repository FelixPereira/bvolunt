import { NextResponse } from 'next/server';
import prisma from '@/libs/prismadb';
import { getCurrentUser } from '@/actions/getCurrentUser';

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
      return NextResponse.json(
        { message: 'Precisa fazer login.' },
        { status: 400 }
      );
    }

    const { socialProjectId } = params;

    const socialProject = await prisma.socialProject.findUnique({
      where: {
        id: socialProjectId,
      },
    });

    if (!socialProject) {
      return NextResponse.json(
        { message: 'Projecto não encontrado' },
        { status: 404 }
      );
    }

    let {} = {};

    let { socialProjectsIds } = currentUser;

    if (socialProjectsIds.includes(socialProjectId)) {
      return NextResponse.json(
        { message: 'Este projecto já foi adicionado' },
        { status: 500 }
      );
    }

    socialProjectsIds.push(socialProjectId);

    const updatedUser = await prisma.volunteer.update({
      where: {
        id: currentUser.id,
      },
      data: {
        socialProjectsIds,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error: any) {
    const status = error.status || 500;
    return NextResponse.json({ message: error.message }, { status });
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
      return NextResponse.json(
        { message: 'Precisa fazer login.' },
        { status: 400 }
      );
    }

    const { socialProjectId } = params;

    if (!currentUser.socialProjectsIds.includes(socialProjectId)) {
      return NextResponse.json(
        { message: 'Projecto não encontrado' },
        { status: 404 }
      );
    }

    const socialProjectsIds = currentUser.socialProjectsIds.filter(
      (socialProject) => socialProject !== socialProjectId
    );

    const updatedUser = await prisma.volunteer.update({
      where: {
        id: currentUser.id,
      },
      data: {
        socialProjectsIds: socialProjectsIds,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error: any) {
    const status = error.status || 500;
    return NextResponse.json({ message: error.message }, { status });
  }
}
