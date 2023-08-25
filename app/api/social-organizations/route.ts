import { NextResponse } from 'next/server';
import prisma from '@/libs/prismadb';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const existingOrg = await prisma.socialOrganization.findUnique({
      where: {
        email: data.email,
      },
    });

    if (existingOrg) {
      return NextResponse.json(
        { message: 'Já existe uma organização com este email.' },
        { status: 500 }
      );
    }

    const newOrganization = await prisma.socialOrganization.create({
      data: {
        ...data,
        province: data.province.value,
        county: data.county.value,
        totalVolunteer: parseInt(data.totalVolunteer, 10),
      },
    });

    return NextResponse.json(
      { data: newOrganization },
      {
        status: 201,
      }
    );
  } catch (error: any) {
    const status = error.status || 500;

    return NextResponse.json(
      { message: error.message },
      {
        status,
      }
    );
  }
}
