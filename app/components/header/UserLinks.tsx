'use client';

const UserLinks = () => {
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
      <a
        href='/'
        className='
          py-1
          px-3
          font-[600]
          text-textBody
          text-[14px]
          transition
          duration-[200ms]
        hover:bg-neutralGray
        '
      >
        Iniciar sessão
      </a>
      <a
        href='/'
        className='
          py-1
          px-3
          font-[600]
          text-textBody
          text-[14px]
          transition
          duration-[200ms]
        hover:bg-neutralGray
        '
      >
        Registar
      </a>
    </div>
  )
}

export default UserLinks;