import { getCurrentUser } from '@/actions';
import { AccountType } from '@prisma/client';
import { redirect } from 'next/navigation';

const OrgDashboardLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect('/');
  } else if (currentUser.account.type === AccountType.USER) {
    redirect('/usuario/home');
  }

  return <>{children}</>;
};

export default OrgDashboardLayout;
