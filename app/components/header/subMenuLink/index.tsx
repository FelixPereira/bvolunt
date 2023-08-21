'use client';

import { LucideIcon } from 'lucide-react';

interface SubMenuLinkProps {
  label: string;
  handleClick: () => void;
  icon: LucideIcon;
}

const SubMenuLink: React.FC<SubMenuLinkProps> = ({
  label,
  handleClick,
  icon: Icon,
}) => {
  return (
    <span
      onClick={handleClick}
      className='
        flex
        items-center
        gap-x-2
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
      <Icon size={13} />
      {label}
    </span>
  );
};

export default SubMenuLink;
