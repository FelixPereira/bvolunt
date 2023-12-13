import { InfoIcon } from 'lucide-react';
import Link from 'next/link';

const DeleteAccount = ({ url }: { url: string }) => {
  return (
    <div className='flex items-center gap-x-1 mt-5'>
      <InfoIcon size={15} />
      <p className=' text-[14px] text-textBody'>
        Remover a sua conta? Aceda{' '}
        <Link href={url} className='text-primary font-bold'>
          aqui
        </Link>
        .
      </p>
    </div>
  );
};

export default DeleteAccount;
