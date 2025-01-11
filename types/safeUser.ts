import { AccountType, User } from '@prisma/client';

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
  accountType: AccountType;
};

export interface UserMenuData {
  name: string | null;
  email: string | null;
  avatar: string | null;
  accountType: AccountType;
}

export interface CurrentUserData {
  accountType: string;
  socialOrganizationIDs?: string[];
  socialProjectIDs?: string[];
}
