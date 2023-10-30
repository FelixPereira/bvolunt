import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/../pages/api/auth/[...nextauth]';
import prisma from '@/libs/prismadb';

async function getCurrentSession() {
  return await getServerSession(authOptions);
}

export async function getCurrentUser(typeOfUser: string) {
  const session = await getCurrentSession();

  if (!session) {
    return null;
  }

  let currentUser;

  if (typeOfUser === 'user') {
    currentUser = await prisma.user.findUnique({
      where: {
        email: session?.user?.email as string,
      },
      include: {
        account: {
          select: {
            type: true,
          },
        },
      },
    });
  } else if (typeOfUser === 'organization') {
    currentUser = await prisma.socialOrganization.findUnique({
      where: {
        email: session?.user?.email as string,
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
