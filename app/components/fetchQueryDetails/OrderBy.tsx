'use client';

import { setOrder } from '@/app/redux/features/organizationQuerySlice';
import { useAppDispatch } from '@/app/redux/hooks';
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import queryString from 'query-string';
import { useCallback, useState } from 'react';

const OrderBy = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAscActive, setIsAscActive] = useState(false);
  const [isDescActive, setIsDescActive] = useState(true);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const params = useParams();
  const pathName = usePathname();
  const searchQuery = useSearchParams();

  const filterProjects = useCallback(
    (orderby: string) => {
      let currentQuery = {};
      const province = searchQuery?.get('province');
      if (params) {
        currentQuery = params;
      }

      const url = queryString.stringifyUrl({
        url: pathName as string,
        query: {
          province,
          orderby,
        },
      });

      router.push(url);
    },
    [params, pathName, searchQuery]
  );

  const setOrderBy = (order: string) => {
    dispatch(setOrder(order));

    if (order === 'asc') {
      setIsAscActive(true);
      setIsDescActive(false);
    } else {
      setIsAscActive(false);
      setIsDescActive(true);
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
        <span>Ordenar</span>
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
              setOrderBy('desc');
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
              setOrderBy('asc');
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
