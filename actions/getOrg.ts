import prisma from '@/libs/prismadb';

export async function getOrg(orgEmail?: string) {
  if (!orgEmail) return null;

  const currentOrg = await prisma.socialOrganization.findUnique({
    where: {
      email: orgEmail,
    },
    include: {
      socialProjects: true,
      events: true,
      sponsors: true,
      volunteers: true,
      accounts: {
        select: {
          type: true,
        },
      },
    },
  });

  if (!currentOrg) return null;

  const { hashedPassword, ...orgWithouPassword } = currentOrg;

  return {
    ...orgWithouPassword,
    // accountType: AccountType.ORGANIZATION,
    createdAt: currentOrg.createdAt.toISOString(),
    updatedAt: currentOrg.updatedAt.toISOString(),
  };
}
