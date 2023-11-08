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
  name: string;
  email: string;
  avatar: string;
  account: Pick<Account, 'type'>;
}
