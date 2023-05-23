'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import queryString from 'query-string';
import { useCallback, useState } from 'react';

const OrderBy = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAscActive, setIsAscActive] = useState(false);
  const [isDescActive, setIsDescActive] = useState(true);
  const [oreredBy, setOrderedBy] = useState('Recentes');
  const router = useRouter();
  const pathName = usePathname();
  const searchQuery = useSearchParams();

  const filterProjects = useCallback(
    (orderby: string) => {
      const province = searchQuery?.get('province');
      const currentQuery = province ? { province, orderby } : { orderby };

      const url = queryString.stringifyUrl({
        url: pathName as string,
        query: {
          ...currentQuery,
        },
      });

      router.push(url);
    },
    [pathName, searchQuery, router]
  );

  const setOrder = (order: string) => {
    if (order === 'asc') {
      setIsAscActive(true);
      setIsDescActive(false);
      setOrderedBy('Antigos');
    } else {
      setIsAscActive(false);
      setIsDescActive(true);
      setOrderedBy('Recentes');
    }
  };

  return (
    <div className='flex flex-col relative'>
      <button
        className={`
          flex
          items-center 
          justify-between
          py-[5px]
          px-[10px]
          border-none
          bg-primary
          text-neutralLight
          cursor-pointer
          rounded
          hover:bg-secondary
        `}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <span className=''>
          Ordenar: <strong>{oreredBy}</strong>
        </span>
        {/* <ExpandMoreIcon /> */}
      </button>
      {isDropdownOpen && (
        <ul
          className={`
            list-none
            bg-neutralLight
            absolute
            rounded
            shadow-lg
            z-10
            bottom-[-50px]
            right-0
            w-[130px]
          `}
        >
          <li
            className={`
              p-[10px]
              cursor-pointer
              ${isDescActive ? 'bg-neutralGray' : 'bg-neutralLight'}
              hover:bg-neutralGray
            `}
            onClick={() => {
              setOrder('desc');
              filterProjects('desc');
            }}
          >
            Mais recentes
          </li>
          <li
            className={`
              p-[10px]
              cursor-pointer
              ${isAscActive ? 'bg-neutralGray' : 'bg-neutralLight'}
              hover:bg-neutralGray
            `}
            onClick={() => {
              setOrder('asc');
              filterProjects('asc');
            }}
          >
            Mais antigos
          </li>
        </ul>
      )}
    </div>
  );
};

export default OrderBy;
