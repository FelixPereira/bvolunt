import { getCurrentUser } from '@/actions';
import { AccountType } from '@prisma/client';
import { NextResponse } from 'next/server';
import prisma from '@/libs/prismadb';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    let loggedInUser = await getCurrentUser();

    if (!loggedInUser) {
      return NextResponse.json(
        { message: 'Precisa fazer login.' },
        { status: 403 }
      );
    }

    if (!loggedInUser?.hashedPassword) return;

    const isValidPassword = await bcrypt.compare(
      data.currentPassword,
      loggedInUser.hashedPassword
    );

    if (!isValidPassword) {
      return NextResponse.json(
        { message: 'Senha atual está errada.' },
        { status: 400 }
      );
    }

    const newhashedPassword = await bcrypt.hash(data.newPassword, 12);

    if (loggedInUser.accountType === AccountType.USER) {
      await prisma.user.update({
        where: { id: loggedInUser.id },
        data: { hashedPassword: newhashedPassword },
      });
    } else {
      await prisma.socialOrganization.update({
        where: { id: loggedInUser.id },
        data: { hashedPassword: newhashedPassword },
      });
    }

    return NextResponse.json(
      { message: 'Senha alterada com sucesso.' },
      { status: 200 }
    );
  } catch (error: any) {
    const status = error.status || 500;
    return NextResponse.json({ message: error.message }, { status });
  }
}
