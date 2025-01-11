import { Dispatch, SetStateAction, useCallback } from 'react';
import { CustomSelectOption } from '../components/form/customSelect';
import { PROVINCES } from '../data/provinces';

export const getCounties = (provinceName?: string | null) => {
  return PROVINCES.find(
    (province) => province.name === provinceName
  )?.counties.map((county) => ({
    label: county,
    value: county,
  }));
};

export const useGetCounties = (
  setCounties: Dispatch<SetStateAction<CustomSelectOption[]>>
) => {
  const getCountiesByState = useCallback(
    (provinceName: string) => {
      const findedCounties = getCounties(provinceName);

      if (!findedCounties) return;

      setCounties(findedCounties);
    },
    [setCounties]
  );

  return {
    getCountiesByState,
  };
};
