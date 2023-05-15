import { NextResponse } from 'next/server';

import prisma from '@/app/libs/prismadb';
import { getCurrentUser } from '@/app/actions/getCurrentUser';

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return NextResponse.error();

  const body = await request.json();
  const socialProject = await prisma.socialProject.create({
    data: {
      ...body,
      responsibleName: currentUser.name,
      responsiblePhone: currentUser.telephone,
      county: body.county.value,
      province: body.province.value,
      totalVolunteers: parseInt(body.totalVolunteers, 10),
      socialOrganizationId: currentUser.id,
    },
  });

  console.log(socialProject);
  return NextResponse.json(socialProject);
}
