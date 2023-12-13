import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface PaginatinProps {
  page: string;
  totalPages: number;
  hasNextPage: boolean;
}

const Pagination: React.FC<PaginatinProps> = ({
  hasNextPage,
  page = '1',
  totalPages,
}) => {
  const currentPage = Math.min(Math.max(Number(page), 1), totalPages);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const linkComomStyle = ` 
    flex 
    items-center 
    justify-center 
    w-[45px] 
    h-[45px] 
    rounded-md 
    border
  `;

  return (
    <div
      className='
        mt-10
        flex 
        items-center 
        justify-center 
        space-x-6 
        text-black
      '
    >
      <Link
        href={`?page=${currentPage - 1}`}
        className={`
          ${linkComomStyle}
          ${
            currentPage === 1
              ? 'border-borderColor text-primary pointer-events-none'
              : 'bg-primary text-neutralLight'
          }
        `}
      >
        <ArrowLeft />
      </Link>
      <nav
        aria-label='Pagination'
        className='
          flex
          items-center
          gap-x-2
        '
      >
        {pages.map((page) => (
          <Link
            href={`?page=${page}`}
            key={page}
            className={`
              flex
              items-center
              justify-center
              border 
              w-[30px] 
              h-[30px] 
              rounded-full
              ${
                currentPage === page
                  ? 'bg-primary text-neutralLight'
                  : 'border-borderColor text-primary'
              }
            `}
          >
            {page}
          </Link>
        ))}
      </nav>
      <Link
        href={`?page=${currentPage + 1}`}
        className={`
          ${linkComomStyle}
          ${
            hasNextPage
              ? 'bg-primary text-neutralLight'
              : 'border-borderColor text-primary pointer-events-none'
          }
        `}
      >
        <ArrowRight />
      </Link>
    </div>
  );
};

export default Pagination;
