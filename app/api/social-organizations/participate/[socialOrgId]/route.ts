import { NextResponse } from 'next/server';
import { getUser, getCurrentUser } from '@/actions';
import prisma from '@/libs/prismadb';

interface IParams {
  socialOrgId: string;
}

export async function POST(request: Request, { params }: { params: IParams }) {
  try {
    const { socialOrgId } = params;
    const loggedInUser = await getCurrentUser();
    let currentUser = await getUser(loggedInUser?.email);

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

    if (!socialOrg) {
      return NextResponse.json(
        { message: 'Organização não encontrada.' },
        { status: 404 }
      );
    }

    const { volunteerIDs } = socialOrg;

    if (volunteerIDs.includes(currentUser.id)) {
      return NextResponse.json(
        { message: 'Já fazes parte da organização.' },
        { status: 400 }
      );
    }

    socialOrg = await prisma.socialOrganization.update({
      where: {
        id: socialOrgId,
      },
      data: {
        volunteers: {
          connect: [{ id: currentUser.id }],
        },
      },
    });

    return NextResponse.json({ data: socialOrg }, { status: 200 });
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
    const loggedInUser = await getCurrentUser();
    let currentUser = await getUser(loggedInUser?.email);

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

    if (!socialOrg) {
      return NextResponse.json(
        { message: 'Organização não encontrada.' },
        { status: 404 }
      );
    }

    const { volunteerIDs } = socialOrg;

    if (!volunteerIDs.includes(currentUser.id)) {
      return NextResponse.json(
        { message: 'Não fazes parte desta organização' },
        { status: 400 }
      );
    }

    socialOrg = await prisma.socialOrganization.update({
      where: {
        id: socialOrgId,
      },
      data: {
        volunteers: {
          disconnect: [{ id: currentUser.id }],
        },
      },
    });

    return NextResponse.json({ data: socialOrg }, { status: 200 });
  } catch (error: any) {
    const status = error.status || 500;
    return NextResponse.json({ message: error.message }, { status });
  }
}
