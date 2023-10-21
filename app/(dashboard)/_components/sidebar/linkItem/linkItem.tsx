import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface LinkItemProps {
  label: string;
  url: string;
  icon: LucideIcon;
  isActive?: boolean;
}

const LinkItem: React.FC<LinkItemProps> = ({
  label,
  url,
  icon: Icon,
  isActive,
}) => {
  return (
    <Link
      className={`
        flex
        items-center
        gap-x-2
        list-none
        border-l-[1px]
        mb-[10px]
        cursor-pointer
        py-[5px]
        pl-[10px]
        pr-[20px]
        rounded
        hover:bg-primary
        hover:text-neutralLight
        hover:transition
        hover:duration-[.3s]
        hover:border-secondary
        ${isActive ? 'bg-primary' : 'bg-transparent'}
        ${isActive ? 'text-neutralLight' : 'text-textTitle'}
        ${isActive ? 'border-secondary' : 'border-l-primary'}
      `}
      href={url}
    >
      <Icon size={15} />
      {label}
    </Link>
  );
};

export default LinkItem;
