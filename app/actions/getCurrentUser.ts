import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import prisma from '@/app/libs/prismadb';

async function getCurrentSession() {
  return await getServerSession(authOptions);
}

export async function getCurrentUser() {
  const session = await getCurrentSession();

  if (!session) {
    return null;
  }

  const currentUser = await prisma.volunteer.findUnique({
    where: {
      email: session.user?.email as string,
    },
  });

  if (!currentUser) {
    return null;
  }

  return currentUser;
}
