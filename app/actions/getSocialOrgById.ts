import prisma from '../libs/prismadb';
import { SIGLE_SOCIAL_ORG } from '../data/organizations';
import { SocialOrganization } from '@prisma/client';

interface IParams {
  socialOrgId: string;
}

export async function getSocialOrgById({ socialOrgId }: IParams) {
  try {
    let socialOrg: SocialOrganization;

    // socialOrg = await prisma.socialOrganization.findUnique({
    //   where: {
    //     id: socialOrgId,
    //   },
    // });

    // DATA TO WORK OFFLINE
    socialOrg = SIGLE_SOCIAL_ORG;

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
