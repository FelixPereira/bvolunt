import { NextResponse } from 'next/server';

import prisma from '@/libs/prismadb';
import { getCurrentUser } from '@/actions/getCurrentUser';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const currentUser = await getCurrentUser();

    if (!currentUser) return NextResponse.error();

    // const existingProject = await prisma.socialProject.findUnique({
    //   where: {
    //     id: data.name,
    //   },
    // });

    // if (existingProject) {
    //   return NextResponse.json('Já existe um projecto com este nome.');
    // }

    const newSocialProject = await prisma.socialProject.create({
      data: {
        ...data,
        responsibleName: currentUser.name,
        responsiblePhone: currentUser.telephone,
        responsibleEmail: currentUser.email,
        county: data.county.value,
        province: data.province.value,
        totalVolunteers: parseInt(data.totalVolunteers, 10),
        socialOrganizationId: currentUser.id,
      },
    });
    return NextResponse.json(newSocialProject);
  } catch (error) {
    NextResponse.error();
  }
}
