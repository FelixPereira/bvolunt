import prisma from '@/libs/prismadb';
import { MOCKED_SOCIAL_ORGS } from '@/data/organizations';

export async function getUnfilteredSocialOrgs() {
  try {
    // DATA FOR OFFLINE USE //
    const socialOrgs = MOCKED_SOCIAL_ORGS;
    // END DATA FOR OFFLINE USE //

    // const socialOrgs = await prisma.socialOrganization.findMany();
    if (!socialOrgs) {
      throw new Error('Não foi possível carregar as organizações.');
    }

    return socialOrgs;
  } catch (error: any) {
    throw new Error('Alguma coisa correu mal. Tente novamente.');
  }
}
