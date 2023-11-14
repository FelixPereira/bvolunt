import bcrypt from 'bcrypt';
import prisma from '@/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, telephone, password } = body;

    const registeredUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (registeredUser) {
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
      },
    });

    return NextResponse.json({ data: user }, { status: 201 });
  } catch (error: any) {
    const status = error.status || 500;
    return NextResponse.json({ message: error.message }, { status });
  }
}
