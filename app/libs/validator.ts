import * as z from 'zod';

export const userSignUpSchema = z
  .object({
    name: z.string().min(3, 'Nome deve ter ao menos 3 caracteres.'),
    email: z
      .string()
      .min(3, { message: 'Email deve ter ao menos 3 caracteres.' })
      .includes('@', { message: 'Insira um email válido' }),
    telephone: z
      .string()
      .min(9, { message: 'Insira um número de telefone válido.' }),
    password: z
      .string()
      .min(6, { message: 'A senha deve ter um mínimo de 6 caracteres.' }),
    confirmPassword: z.string(),
  })
  .refine(
    (value) => {
      return value.password === value.confirmPassword;
    },
    { message: 'As senhas são diferentes..', path: ['confirmPassword'] }
  );

export const userUpdateSchema = z.object({
  name: z.string().min(3, 'Nome deve ter ao menos 3 caracteres.'),
  email: z
    .string()
    .min(3, 'Email deve ter ao menos 3 caracteres.')
    .includes('@', { message: 'Insira um enderço de email válido.' }),
  telephone: z.string().min(9, 'Insira um número telefónico válido.'),
  profission: z.string(),
  birthDate: z.string(),
  genre: z.string(),
  province: z.string().min(3, 'Insira uma província válida.'),
  county: z.string().min(3, 'Insira um município válido.'),
  address: z.string().optional(),
});

export const orgSignUpSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: 'Nome deve ter ao menos 3 caracteres.' }),
    email: z
      .string()
      .min(3, { message: 'Email deve ter ao menos 3 caracteres.' })
      .includes('@', { message: 'Insira um endereço de email válido.' }),
    telephone: z
      .string()
      .min(9, { message: 'Insira um número de telefone válido.' }),
    responsibleName: z
      .string()
      .min(3, { message: 'O nome deve ter ao menos 3 caracteres' }),
    responsiblePhone: z
      .string()
      .min(9, { message: 'Insira um número de telefone válido.' }),
    responsibleEmail: z
      .string()
      .min(3, { message: 'Email deve ter ao menos 3 caracteres' })
      .includes('@', { message: 'Insira um endereço de email válido.' }),
    province: z.string(),
    county: z.string(),
    address: z
      .string()
      .min(3, { message: 'Endereço deve ter ao menos 3 caracteres' }),
    coverImage: z.string(),
    avatar: z.string(),
    description: z
      .string()
      .min(10, { message: 'Descrição deve conter ao menos 10 caracteres' }),
    password: z
      .string()
      .min(6, { message: 'Senha deve ter ao menos 6 caracteres.' }),
    confirmPassword: z.string(),
  })
  .refine(
    (value) => {
      return value.password === value.confirmPassword;
    },
    { message: 'As senhas são diferentes.', path: ['confirmPassword'] }
  );

export const resetPasswordSchema = z
  .object({
    currentPassword: z.string(),
    newPassword: z
      .string()
      .min(6, { message: 'Senha deve ter no mínimo 6 caracteres.' }),
    confirmPassword: z.string(),
  })
  .refine(
    (value) => {
      return value.newPassword === value.confirmPassword;
    },
    { path: ['confirmPassword'], message: 'Senhas não combinam.' }
  );
