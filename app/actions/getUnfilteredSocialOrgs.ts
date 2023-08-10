import { ORGANIZATIONS } from '@/data/organizations';
import prisma from '@/libs/prismadb';

export async function getUnfilteredSocialOrgs() {
  try {
    const socialOrgs = await prisma.socialOrganization.findMany();

    // STATIC DATA TO WORK OFFLINE
    // const socialOrgs = ORGANIZATIONS;

    if (!socialOrgs) {
      throw new Error('Não foi possível carregar as organizações.');
    }

    return socialOrgs;
  } catch (error: any) {
    throw new Error('Alguma coisa correu mal. Tente novamente.');
  }
}
