'use client';

import { useAppDispatch } from '@/app/redux/hooks';
import { onOpen } from '@/app/redux/features/modalSlice';

interface UserLinksProps {
  setIsLinksOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLinksOpen: boolean;
}

const UserLinks: React.FC<UserLinksProps> = ({
  setIsLinksOpen,
  isLinksOpen,
}) => {
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    setIsLinksOpen(!isLinksOpen);
    dispatch(onOpen());
  };

  return (
    <div
      className='
        absolute
        right-0
        top-[50px]
        flex
        flex-col
        gap-y-2
        w-[120px]
        rounded
        bg-neutralLight
        shadow-lg
      '
    >
      <span
        onClick={handleOpenModal}
        className='
          py-2
          px-3
          font-[600]
          text-textBody
          text-[11px]
          uppercase
          transition
          duration-[200ms]
          cursor-pointer
          hover:bg-primary
          hover:text-neutralLight
        '
      >
        Iniciar sessão
      </span>
      <span
        onClick={handleOpenModal}
        className='
          py-2
          px-3
          font-[600]
          text-textBody
          text-[11px]
          uppercase
          transition
          duration-[200ms]
          cursor-pointer
        hover:bg-primary
          hover:text-neutralLight
        '
      >
        Registar
      </span>
    </div>
  );
};

export default UserLinks;
