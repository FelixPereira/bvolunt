import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import prisma from '@/app/libs/prismadb';
import { Session } from 'next-auth';

async function getCurrentSession() {
  return await getServerSession(authOptions);
}

export async function getCurrentUser() {
  const session = await getCurrentSession();
  // const session: Session | null = null;

  if (!session) {
    return null;
    // return {}
  }

  const currentUser = await prisma.volunteer.findUnique({
    where: {
      email: session.user?.email as string,
    },
  });

  if (!currentUser) {
    return null;
  }

  return {
    ...currentUser,
    emailVerified: currentUser.emailVerified?.toISOString() || undefined,
    createdAt: currentUser.createdAt.toISOString(),
    updatedAt: currentUser.updatedAt.toISOString(),
  };
}
