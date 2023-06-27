interface MenuIconProps {
  children: React.ReactNode;
  handleClick: () => void;
}

const MenuIcon: React.FC<MenuIconProps> = ({ children, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className='
        flex
        gap-x-2
        justify-between
        items-center
        border-[1px]
        border-neutralGray
        px-3
        py-2
        rounded
        hover:shadow-lg
        cursor-pointer
      '
    >
      {children}
    </div>
  );
};

export default MenuIcon;
