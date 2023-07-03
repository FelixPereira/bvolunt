import { Volunteer } from '@prisma/client';

export type SafeUser = Omit<
  Volunteer,
  'emailVerified' | 'createdAt' | 'updatedAt' | 'hashedPassword'
> & {
  emailVerified: string | undefined;
  createdAt: string;
  updatedAt: string;
};
