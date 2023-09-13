import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/../pages/api/auth/[...nextauth]';
import prisma from '@/libs/prismadb';

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
    include: {
      socialProjects: {
        include: {
          socialOrganization: true,
        },
      },
      socialOrganizations: true,
      events: true,
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
