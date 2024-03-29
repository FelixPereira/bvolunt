import Link from 'next/link';

interface MenuItemProps {
  pathName: string | null;
  menuTitle?: string;
  linksList: {
    url: string;
    label: string;
  }[];
}

const MenuItem: React.FC<MenuItemProps> = ({
  pathName,
  menuTitle,
  linksList,
}) => {
  return (
    <div>
      <strong className='block mb-3 text-[14px] font-bold'>{menuTitle}</strong>
      <ul className='flex flex-col gap-y-5'>
        {linksList.map((link) => (
          <li key={link.label}>
            <Link
              href={link.url}
              className={`
                font-[600]
                uppercase
                text-[12px]
                pb-2
                rounded
                transition
                duration-[200ms]
                ${pathName === link.url && 'border-b-[2px] border-borderColor'}
                hover:border-b-[2px] border-borderColor
              `}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItem;
