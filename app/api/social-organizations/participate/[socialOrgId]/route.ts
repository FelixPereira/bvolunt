import { NextResponse } from 'next/server';
import prisma from '@/libs/prismadb';
import { getCurrentUser } from '@/actions/getCurrentUser';
// import { SINGLE_SOCIAL_PROJECT } from '@/data/socialProjects';

interface IParams {
  socialOrgId: string;
}

export async function POST(request: Request, { params }: { params: IParams }) {
  try {
    const { socialOrgId } = params;
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return NextResponse.json(
        { message: 'Precisa fazer login.' },
        { status: 400 }
      );
    }

    let socialOrg = await prisma.socialOrganization.findUnique({
      where: {
        id: socialOrgId,
      },
    });

    // // DATE FOR OFFLINE DEV
    // let socialOrg = SINGLE_SOCIAL_PROJECT;

    if (!socialOrg) {
      return NextResponse.json(
        { message: 'Organização não encontrada.' },
        { status: 404 }
      );
    }

    let { volunteerIds } = socialOrg;

    if (volunteerIds.includes(currentUser.id)) {
      return NextResponse.json(
        { message: 'Já faz parte do projecto' },
        { status: 500 }
      );
    }

    volunteerIds.push(currentUser.id);

    const updatedOrg = await prisma.socialOrganization.update({
      where: {
        id: socialOrgId,
      },
      data: {
        volunteerIds,
      },
    });

    return NextResponse.json({ updatedOrg });
  } catch (error: any) {
    const status = error.status || 500;
    return NextResponse.json({ message: error.message }, { status });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  try {
    const { socialOrgId } = params;
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json(
        { message: 'Precisa fazer login' },
        { status: 400 }
      );
    }

    const socialOrg = await prisma.socialOrganization.findUnique({
      where: {
        id: socialOrgId,
      },
    });

    if (!socialOrg) {
      return NextResponse.json(
        { message: 'Organização não encontrada' },
        { status: 404 }
      );
    }

    let { volunteerIds } = socialOrg;

    if (!volunteerIds.includes(currentUser.id)) {
      return NextResponse.json(
        { message: 'Não faz parte desta organização' },
        { status: 500 }
      );
    }

    volunteerIds = volunteerIds.filter(
      (volunteerId) => volunteerId !== currentUser.id
    );

    const updatedOrg = await prisma.socialOrganization.update({
      where: {
        id: socialOrgId,
      },
      data: {
        volunteerIds,
      },
    });

    return NextResponse.json({ updatedOrg });
  } catch (error: any) {
    const status = error.status || 500;
    return NextResponse.json({ message: error.message }, { status });
  }
}
