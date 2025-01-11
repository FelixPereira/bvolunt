'use server';

import { LoginSchema } from '@/schemas';
import { signIn } from '@/auth';
import * as z from 'zod';
import { DEFAULT_USER_lOGIN_REDIRECT } from '@/routes';
import { AuthError } from 'next-auth';

export const login = async (value: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(value);

  if (!validatedFields.success) {
    return { error: 'Campos inválidos' };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_USER_lOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Credenciais inválidas!' };
        default: 
          return { error: 'Algo correu mal. Tente novamente!' };
      }
    }

    throw error;
  }
};
