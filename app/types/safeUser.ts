import { Account, User } from '@prisma/client';

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
  account: Account;
};

export interface UserMenuData {
  name: string | null;
  email: string | null;
  avatar: string | null;
  account: Pick<Account, 'type'>;
}
