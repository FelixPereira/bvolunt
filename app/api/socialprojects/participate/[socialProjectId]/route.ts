import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/actions/getCurrentUser';
import prisma from '@/libs/prismadb';

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
    const { socialProjectId } = params;
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return NextResponse.json(
        { message: 'Precisa fazer login.' },
        { status: 401 }
      );
    }

    let socialProject = await prisma.socialProject.findUnique({
      where: { id: socialProjectId },
    });

    if (!socialProject) {
      return NextResponse.json(
        { message: 'Projecto não encontrado' },
        { status: 404 }
      );
    }

    const { volunteerIDs } = socialProject;

    if (volunteerIDs.includes(currentUser.id)) {
      return NextResponse.json(
        { message: 'Usuário já faz parte do projecto.' },
        { status: 400 }
      );
    }

    socialProject = await prisma.socialProject.update({
      where: {
        id: socialProjectId,
      },
      data: {
        volunteers: {
          connect: [{ id: currentUser.id }],
        },
      },
    });

    return NextResponse.json(socialProject);
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
    const { socialProjectId } = params;

    if (!currentUser) {
      return NextResponse.json(
        { message: 'Precisa fazer login.' },
        { status: 401 }
      );
    }

    let socialProject = await prisma.socialProject.findUnique({
      where: { id: socialProjectId },
    });

    if (!socialProject) {
      return NextResponse.json(
        { message: 'Projecto não encontrado.' },
        { status: 404 }
      );
    }

    const { volunteerIDs } = socialProject;

    if (!volunteerIDs.includes(currentUser.id)) {
      return NextResponse.json(
        { message: 'Usuário não faz parte do projecto.' },
        { status: 400 }
      );
    }

    socialProject = await prisma.socialProject.update({
      where: { id: socialProjectId },
      data: {
        volunteers: {
          disconnect: [{ id: currentUser.id }],
        },
      },
    });

    return NextResponse.json(socialProject);
  } catch (error: any) {
    const status = error.status || 500;
    return NextResponse.json({ message: error.message }, { status });
  }
}
