'use client';

import { useAppDispatch } from '@/redux/hooks';
import {
  openLoginModal,
  openRegisterTypeModal,
} from '@/redux/features/modalSlice';
import SubMenuLink from '../subMenuLink';
import { SafeUser } from '@/types/safeUser';
import { useRouter } from 'next/navigation';
import { USER_MENU_LINKS } from '@/constants/navigationLinks';
import { signOut } from 'next-auth/react';
import Avatar from '../avatar';
import { getNameInitials } from '@/utils/avatar';

interface UserLinksProps {
  setIsLinksOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLinksOpen: boolean;
  currentUser: SafeUser | null;
}

const UserLinks: React.FC<UserLinksProps> = ({ currentUser }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

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
          <div className='flex flex-col items-center border-b-4 border-primary px-3 mb-2 pb-3'>
            <Avatar currentUser={currentUser} />
            <strong className='text-[14px] text-textTitle mt-2'>
              {getNameInitials(currentUser?.name)}
            </strong>
            <p className='text-[13px] text-textBody'>{currentUser?.email}</p>
          </div>
          {USER_MENU_LINKS.map((link) => (
            <SubMenuLink
              key={link.label}
              label={link.label}
              handleClick={() => router.push(link.url)}
            />
          ))}
          <SubMenuLink label='Ajuda' handleClick={() => signOut()} />
          <SubMenuLink label='Terminar sessão' handleClick={() => signOut()} />
        </>
      ) : (
        <div>
          <div className='flex flex-col'>
            <SubMenuLink
              label='Iniciar sessão'
              handleClick={() => dispatch(openLoginModal())}
            />
            <SubMenuLink
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
