import { getServerSession } from 'next-auth/next';
import prisma from '@/libs/prismadb';
import { authOptions } from '@/../pages/api/auth/[...nextauth]';
// import { Session } from 'next-auth';

// import { VOLUNTEER } from '../data/volunteer';

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

  // const currentUser = VOLUNTEER;

  if (!currentUser) {
    return null;
  }

  const { hashedPassword, ...userWithoutPassword } = currentUser;

  return {
    ...userWithoutPassword,
    emailVerified: currentUser.emailVerified?.toISOString() || undefined,
    createdAt: currentUser.createdAt.toISOString(),
    updatedAt: currentUser.updatedAt.toISOString(),
  };
}
