import prisma from '@/libs/prismadb';
import { AccountType } from '@prisma/client';

export async function getUser(userEmail?: string) {
  if (!userEmail) return null;
  const currentUser = await prisma.user.findUnique({
    where: {
      email: userEmail,
    },
  });

  if (!currentUser) return null;

  const { hashedPassword, ...userWithoutPassword } = currentUser;

  return {
    ...userWithoutPassword,
    accountType: AccountType.USER,
    createdAt: currentUser.createdAt.toISOString(),
    updatedAt: currentUser.updatedAt.toISOString(),
  };
}
