import { ORGANIZATIONS } from '../data/organizations';
import prisma from '../libs/prismadb';

export async function getUnfilteredSocialOrgs() {
  try {
    const socialOrgs = ORGANIZATIONS;
    // const socialOrgs = await prisma.socialOrganization.findMany();

    if (!socialOrgs) {
      throw new Error('Não foi possível carregar as organizações.');
    }

    // return socialOrgs;
    return socialOrgs;
  } catch (error: any) {
    throw new Error('Alguma coisa correu mal. Tente novamente.');
  }
}
