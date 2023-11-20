import { getCurrentUser, getUser } from '@/actions';
import { CurrentUserData } from '@/types';
import { AccountType } from '@prisma/client';

export async function useGetUserData() {
  const loggedInUserAccount = await getCurrentUser();
  const currentUser = await getUser(loggedInUserAccount?.email);

  let currentUserData: CurrentUserData | null = null;

  if (loggedInUserAccount?.accountType === AccountType.ORGANIZATION) {
    currentUserData = {
      accountType: AccountType.ORGANIZATION,
    };
  } else if (loggedInUserAccount?.accountType === AccountType.USER) {
    currentUserData = {
      accountType: AccountType.USER,
      socialOrganizationIDs: currentUser?.socialOrganizationIDs,
    };
  }

  return {
    currentUserData,
  };
}
