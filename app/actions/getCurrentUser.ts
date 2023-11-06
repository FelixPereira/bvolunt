import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/../pages/api/auth/[...nextauth]';
import { AccountType } from '@prisma/client';
import prisma from '@/libs/prismadb';

async function getCurrentSession() {
  return await getServerSession(authOptions);
}

export async function getCurrentUser() {
  const session = await getCurrentSession();

  if (!session) return null;

  let currentUser = null;

  const account = await prisma.account.findUnique({
    where: {
      email: session?.user?.email as string,
    },
  });

  if (!account) return null;

  if (account.type === AccountType.USER) {
    currentUser = await prisma.user.findUnique({
      where: {
        id: account.userId,
      },
    });
  } else if (account.type === AccountType.ORGANIZATION) {
    currentUser = await prisma.socialOrganization.findUnique({
      where: {
        id: account.organizationId,
      },
    });
  }

  if (!currentUser) {
    return null;
  }

  const { hashedPassword, ...userWithoutPassword } = currentUser;

  return {
    ...userWithoutPassword,
    createdAt: currentUser.createdAt.toISOString(),
    updatedAt: currentUser.updatedAt.toISOString(),
  };
}
