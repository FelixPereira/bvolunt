import { getServerSession } from 'next-auth/next';
import prisma from '@/libs/prismadb';
import { authOptions } from '@/../pages/api/auth/[...nextauth]';

async function getCurrentSession() {
  return await getServerSession(authOptions);
}

export async function getCurrentUser() {
  const session = await getCurrentSession();

  if (!session) {
    return null;
  }

  const currentUser = await prisma.user.findUnique({
    where: {
      email: session?.user?.email as string,
    },
  });

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
