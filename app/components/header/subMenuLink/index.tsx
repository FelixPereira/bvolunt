'use client';

interface SubMenuLinkProps {
  label: string;
  handleClick: () => void;
}

const SubMenuLink: React.FC<SubMenuLinkProps> = ({ label, handleClick }) => {
  return (
    <span
      onClick={handleClick}
      className='
        py-3
        px-3
        font-[600]
        text-textTitle
        text-[11px]
        uppercase
        transition
        duration-[200ms]
        cursor-pointer
        hover:bg-primary
        hover:text-neutralLight
      '
    >
      {label}
    </span>
  );
};

export default SubMenuLink;
