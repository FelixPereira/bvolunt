import prisma from '@/libs/prismadb';

interface IParams {
  socialOrgId: string;
}

export async function getSocialOrgById({ socialOrgId }: IParams) {
  try {
    const socialOrg = await prisma.socialOrganization.findUnique({
      where: {
        id: socialOrgId,
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
