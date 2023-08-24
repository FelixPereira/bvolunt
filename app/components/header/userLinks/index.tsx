'use client';

import { useAppDispatch } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { SafeUser } from '@/types/safeUser';
import { USER_MENU_LINKS } from '@/constants/navigationLinks';
import { getUserName } from '@/utils/user';
import {
  openLoginModal,
  openRegisterTypeModal,
} from '@/redux/features/modalSlice';
import SubMenuLink from '../subMenuLink';
import Avatar from '../avatar';

import { LogOut, HelpCircle } from 'lucide-react';

interface UserLinksProps {
  setIsLinksOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLinksOpen: boolean;
  currentUser: SafeUser | null;
}

const UserLinks: React.FC<UserLinksProps> = ({ currentUser }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const userName = getUserName(currentUser?.name);

  return (
    <div
      className='
        absolute
        right-0
        top-[50px]
        flex
        flex-col
        min-w-[140px]
        rounded
        bg-neutralLight
        shadow-lg
      '
    >
      {currentUser ? (
        <>
          <div
            className='
              flex
              flex-col
              items-center
              border-b-4
              border-primary
              px-3
              mb-2
              pb-3
            '
          >
            <Avatar currentUser={currentUser} />
            <strong className='text-[14px] text-textTitle mt-2'>
              {userName?.firstLastName}
            </strong>
            <p className='text-[13px] text-textBody'>{currentUser?.email}</p>
          </div>
          {USER_MENU_LINKS.map((link) => (
            <SubMenuLink
              icon={link.icon}
              key={link.label}
              label={link.label}
              handleClick={() => router.push(link.url)}
            />
          ))}
          <SubMenuLink
            icon={HelpCircle}
            label='Ajuda'
            handleClick={() => signOut()}
          />
          <SubMenuLink
            icon={LogOut}
            label='Terminar sessão'
            handleClick={() => signOut()}
          />
        </>
      ) : (
        <div>
          <div className='flex flex-col'>
            <SubMenuLink
              icon={LogOut}
              label='Iniciar sessão'
              handleClick={() => dispatch(openLoginModal())}
            />
            <SubMenuLink
              icon={LogOut}
              label='Registar'
              handleClick={() => dispatch(openRegisterTypeModal())}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserLinks;
