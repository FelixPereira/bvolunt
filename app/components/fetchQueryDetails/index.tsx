'use client';

import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { setOrder } from '../../redux/features/organizationQuerySlice';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { renderQueryDescription } from '../../utils';
import { OrganizationType, SocialProjectType } from '../../types';
import { RootState } from '../../redux/store';

interface FetchQueryDetailsProps {
  organizations: OrganizationType[] | SocialProjectType[];
  typeOfData: string;
  query: string;
}

const FetchQueryDetails: React.FC<FetchQueryDetailsProps> = ({
  organizations,
  typeOfData,
  query,
}) => {
  // const { province, orderBy } = useAppSelector((state) => state[query]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAscActive, setIsAscActive] = useState(false);
  const [isDescActive, setIsDescActive] = useState(true);
  const dispatch = useAppDispatch();
  const queryDescritpion = renderQueryDescription(typeOfData, organizations);

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
    <div className='flex justify-between align-start'>
      <div>
        <h2
          className={`
            text-[40px]
            mb-[10px]
            text-textTitle
          `}
        >
          Provincia na query: {'province' || 'Todas'}
        </h2>
        <p className='mb-5'>
          <strong>#{organizations?.length}</strong>
          {' ' + queryDescritpion}
        </p>
      </div>
      <div className='flex flex-col'>
        <div>
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
            <ExpandMoreIcon />
          </button>
          {isDropdownOpen && (
            <ul
              className={`
                list-none
                bg-neutralLight
                mt-[10px]
                absolute
                rounded
                shadow-lg
              `}
            >
              <li
                className={`
                  p-[10px]
                  cursor-pointer
                  ${isDescActive ? 'bg-neutralGray' : 'bg-neutralLight'}
                  hover:bg-neutralGray
                `}
                onClick={() => setOrderBy('desc')}
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
                onClick={() => setOrderBy('asc')}
              >
                Mais antigos
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default FetchQueryDetails;
