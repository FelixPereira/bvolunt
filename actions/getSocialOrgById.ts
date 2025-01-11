import prisma from '@/libs/prismadb';

export async function getSocialOrgById(socialOrgId: string) {
  try {
    const socialOrg = await prisma.socialOrganization.findUnique({
      where: {
        id: socialOrgId,
      },
      include: {
        sponsors: {
          select: {
            id: true,
            logoUrl: true,
            name: true,
          },
        },
        volunteers: {
          select: {
            id: true,
            avatar: true,
          },
        },
      },
    });

    if (!socialOrg) {
      throw new Error('Organização não encontrada');
    }

    return {
      ...socialOrg,
      createdAt: socialOrg.createdAt.toISOString(),
      updatedAt: socialOrg.updatedAt.toISOString(),
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
