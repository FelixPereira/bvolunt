'use client';

interface SubMenuLinkProps {
  label: string;
  onClick: () => void;
}

const SubMenuLink: React.FC<SubMenuLinkProps> = ({ label, onClick }) => {
  return (
    <span
      onClick={onClick}
      className='
        py-3
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
      {label}
    </span>
  );
};

export default SubMenuLink;
