import { NextResponse } from 'next/server';

import prisma from '@/libs/prismadb';
import { getCurrentUser } from '@/actions/getCurrentUser';
import { getOrg } from '@/actions/getOrg';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const loggedInOrg = await getCurrentUser();
    const currentOrg = await getOrg(loggedInOrg?.email);

    if (!currentOrg)
      return NextResponse.json(
        { message: 'Precisa fazer login.' },
        { status: 401 }
      );

    const existingProject = await prisma.socialProject.findUnique({
      where: {
        name: data.name,
      },
    });

    if (existingProject) {
      return NextResponse.json(
        { message: 'Já existe um projecto com este nome.' },
        { status: 400 }
      );
    }

    const newSocialProject = await prisma.socialProject.create({
      data: {
        ...data,
        county: data.county.value,
        province: data.province.value,

        socialOrganization: {
          connect: {
            id: currentOrg.id,
          },
        },
      },
    });

    return NextResponse.json({ data: newSocialProject }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
