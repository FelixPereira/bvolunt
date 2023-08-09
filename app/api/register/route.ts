import bcrypt from 'bcrypt';
import prisma from '@/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, telephone, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.volunteer.create({
    data: {
      name,
      email,
      telephone,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
