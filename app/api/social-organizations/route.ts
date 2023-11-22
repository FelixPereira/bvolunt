import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/libs/prismadb';
import { AccountType } from '@prisma/client';

export async function POST(request: Request) {
  try {
    const { password, ...data } = await request.json();

    const existingOrg = await prisma.socialOrganization.findUnique({
      where: {
        email: data.email,
      },
    });

    if (existingOrg) {
      return NextResponse.json(
        { message: 'Já existe uma organização com este email.' },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newOrganization = await prisma.socialOrganization.create({
      data: {
        ...data,
        province: data.province.value,
        county: data.county.value,
        hashedPassword,
        accounts: {
          create: {
            email: data.email,
            type: AccountType.ORGANIZATION,
          },
        },
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
