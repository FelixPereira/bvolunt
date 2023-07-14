import { SocialOrganization } from '@prisma/client';

export type SafeSocialOrg = Omit<
  SocialOrganization,
  'createdAt' | 'updatedAt'
> & {
  createdAt: string;
  updatedAt: string;
};
