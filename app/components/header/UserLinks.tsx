'use client';

import { useAppDispatch } from '@/app/redux/hooks';
import { onOpen } from '@/app/redux/features/modalSlice';

const UserLinks = () => {
  const dispatch = useAppDispatch();
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
        onClick={() => dispatch(onOpen())}
        className='
          py-1
          px-3
          font-[600]
          text-textBody
          text-[14px]
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
        onClick={() => dispatch(onOpen())}
        className='
          py-1
          px-3
          font-[600]
          text-textBody
          text-[14px]
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
