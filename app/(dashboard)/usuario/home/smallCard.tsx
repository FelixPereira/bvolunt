import Link from 'next/link';

export interface SmallCardProps {
  title: string;
  text1?: string | null;
  text2?: string;
  url: string;
}

const SmallCard: React.FC<SmallCardProps> = ({ title, text1, text2, url }) => {
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
      <strong className='text-[13px]'>{text1}</strong>
      <strong className='text-[12px]'>{text2}</strong>
    </Link>
  );
};

export default SmallCard;
