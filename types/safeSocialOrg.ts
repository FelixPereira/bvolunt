import { AccountType, SocialOrganization } from '@prisma/client';

export type SafeSocialOrg = Omit<
  SocialOrganization,
  'createdAt' | 'updatedAt' | 'hashedPassword'
> & {
  createdAt: string;
  updatedAt: string;
  accountType?: AccountType;
};
