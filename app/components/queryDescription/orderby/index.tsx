'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { ChevronDown } from 'lucide-react';
import queryString from 'query-string';
import OrderItem from './orderItem';
import {
  closeOrderDropdown,
  openOrderDropdown,
} from '@/redux/features/orderDropdown';

const Orderby = () => {
  const [isAscActive, setIsAscActive] = useState(false);
  const [isDescActive, setIsDescActive] = useState(true);
  const [oreredBy, setOrderedBy] = useState('Recentes');
  const { isOrderDropdownOpen } = useAppSelector((state) => state.orderBy);
  const router = useRouter();
  const pathName = usePathname();
  const searchQuery = useSearchParams();
  const dispatch = useAppDispatch();

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

  const handleClick = (order: string) => {
    setOrder(order);
    filterProjects(order);
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
          hover:brightness-125
        `}
        onClick={toggleDropdown}
      >
        <span className='flex items-center gap-x-2'>
          <strong>{oreredBy}</strong>
          <ChevronDown />
        </span>
      </button>
      {isOrderDropdownOpen && (
        <ul
          className={`
            list-none
            bg-neutralLight
            absolute
            shadow-lg
            z-[1]
            top-9
            right-0
            w-[130px]
          `}
        >
          <OrderItem
            order='recentes'
            label='Mais recentes'
            isActive={isDescActive}
            handleClick={handleClick}
          />

          <OrderItem
            order='antigos'
            label='Mais antigos'
            isActive={isAscActive}
            handleClick={handleClick}
          />
        </ul>
      )}
    </div>
  );
};

export default Orderby;
