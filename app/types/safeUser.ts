import { User } from '@prisma/client';

export interface UserName {
  initials: string;
  firstLastName: string;
}

export type SafeUser = Omit<
  User,
  'createdAt' | 'updatedAt' | 'hashedPassword'
> & {
  createdAt: string;
  updatedAt: string;
};
