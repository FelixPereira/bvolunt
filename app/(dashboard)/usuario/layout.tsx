import { getCurrentUser } from '@/actions';
import { AccountType } from '@prisma/client';
import { redirect } from 'next/navigation';

const UserDashboardLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const currentUser = await getCurrentUser();

  if (currentUser?.account.type === AccountType.ORGANIZATION) {
    redirect('/organizacao/home');
  }
  return <>{children}</>;
};

export default UserDashboardLayout;
