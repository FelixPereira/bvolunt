import { Volunteer } from '@prisma/client';

export type SafeUser = Omit<
  Volunteer,
  'emailVerified' | 'createdAt' | 'updatedAt'
> & {
  emailVerified: string | undefined;
  createdAt: string;
  updatedAt: string;
};
