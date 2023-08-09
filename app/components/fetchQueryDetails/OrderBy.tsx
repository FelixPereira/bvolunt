'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import queryString from 'query-string';
import { useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  closeOrderDropdown,
  openOrderDropdown,
} from '@/redux/features/orderDropdown';

const Orderby = () => {
  const [isAscActive, setIsAscActive] = useState(false);
  const [isDescActive, setIsDescActive] = useState(true);
  const [oreredBy, setOrderedBy] = useState('Recentes');
  const router = useRouter();
  const pathName = usePathname();
  const searchQuery = useSearchParams();
  const dispatch = useAppDispatch();
  const { isOrderDropdownOpen } = useAppSelector((state) => state.orderBy);

  const filterProjects = useCallback(
    (ordenar: string) => {
      const provincia = searchQuery?.get('provincia');
      const currentQuery = provincia ? { provincia, ordenar } : { ordenar };

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
    if (order === 'antigos') {
      setIsAscActive(true);
      setIsDescActive(false);
      setOrderedBy('Antigos');
    } else {
      setIsAscActive(false);
      setIsDescActive(true);
      setOrderedBy('Recentes');
    }
  };

  const toggleDropdown = () => {
    if (isOrderDropdownOpen) return dispatch(closeOrderDropdown());

    return dispatch(openOrderDropdown());
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
        onClick={toggleDropdown}
      >
        <span className=''>
          Ordenar: <strong>{oreredBy}</strong>
        </span>
        {/* <ExpandMoreIcon /> */}
      </button>
      {isOrderDropdownOpen && (
        <ul
          className={`
            list-none
            bg-neutralLight
            absolute
            rounded
            shadow-lg
            z-10
            bottom-[-8px]
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
              setOrder('recentes');
              filterProjects('recentes');
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
              setOrder('antigos');
              filterProjects('antigos');
            }}
          >
            Mais antigos
          </li>
        </ul>
      )}
    </div>
  );
};

export default Orderby;
