import Link from 'next/link';

export interface SmallCardsListProps {
  title: string;
  primaryText?: string | null;
  secondaryText?: string;
  url: string;
}

const SmallCardsList: React.FC<SmallCardsListProps> = ({
  title,
  primaryText,
  secondaryText,
  url,
}) => {
  return (
    <Link
      href={url}
      className='
        mb-3 
        flex 
        flex-col 
        bg-neutralLight 
        shadow-md 
        rounded 
        hover:shadow-lg 
        px-2 
        py-3
      '
    >
      <p className='text-textBody'>{title}</p>
      <strong className='text-[13px]'>{primaryText}</strong>
      <strong className='text-[12px]'>{secondaryText}</strong>
    </Link>
  );
};

export default SmallCardsList;
