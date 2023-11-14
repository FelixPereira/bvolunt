import { SocialOrganization, SocialProject } from '@prisma/client';

export type SafeSocialProject = Omit<
  SocialProject,
  'createdAt' | 'updatedAt'
> & {
  createdAt: string;
  updatedAt: string;
  socialOrganization: Pick<SocialOrganization, 'name' | 'telephone' | 'email'>;
};
