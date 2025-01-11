import Link from 'next/link';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from 'lucide-react';

const SocialIcons = () => {
  return (
    <div className='flex gap-x-3 items-center'>
      <Link href='#'>
        <FacebookIcon size={20} color='#fff' />
      </Link>
      <Link href='#'>
        <InstagramIcon size={20} color='#fff' />
      </Link>
      <Link href='#'>
        <YoutubeIcon size={20} color='#fff' />
      </Link>
    </div>
  );
};

export default SocialIcons;
