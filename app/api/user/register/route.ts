import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/libs/prismadb';
import { AccountType } from '@prisma/client';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, telephone, password } = body;

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: 'O email já está em uso.' },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        telephone,
        hashedPassword,
        accounts: {
          create: {
            email,
            type: AccountType.USER,
          },
        },
      },
    });

    return NextResponse.json({ data: user }, { status: 201 });
  } catch (error: any) {
    const status = error.status || 500;
    return NextResponse.json({ message: error.message }, { status });
  }
}
