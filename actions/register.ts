'use server';

import { UserRegisterSchema } from '@/schemas';
import { FieldValues } from 'react-hook-form';
import bcript from 'bcrypt';
import prisma from '@/libs/prismadb';

export const userRegister = async (value: FieldValues) => {
  const validatedFields = UserRegisterSchema.safeParse(value);

  if (!validatedFields.success) {
    return { error: 'Campos inválidos' };
  }

  const { email, password, name, telephone } = validatedFields.data;
  const hashedPassword = await bcript.hash(password, 10);

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return { error: 'Email já está a ser usado.' };
  }

  await prisma.user.create({
    data: {
      email,
      name,
      telephone,
      password: hashedPassword,
    },
  });

  // TODO: send verification email

  return { success: 'Usuário criado.' };
};
