import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/actions';
import prisma from '@/libs/prismadb';

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    const data = await request.json();
    const { birthDate, genre } = data;
    const newBirthDate = new Date(birthDate);

    const existingUser = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (existingUser?.id !== currentUser?.id) {
      return NextResponse.json(
        { message: 'Este email já está em uso.' },
        { status: 400 }
      );
    }

    const user = await prisma.user.update({
      where: {
        id: currentUser?.id,
      },
      data: {
        ...data,
        birthDate: newBirthDate.toISOString(),
        genre: genre.value,
      },
    });

    const { hashedPassword, ...userWithoutPassword } = user;

    return NextResponse.json({ data: userWithoutPassword }, { status: 200 });
  } catch (error: any) {
    const status = error.status || 500;
    return NextResponse.json({ message: error.message }, { status: status });
  }
}
