import { useCallback, useState } from 'react';
import { CustomSelectOption } from '../components/form/customSelect';
import { PROVINCES } from '../data/provinces';

export const useGetCounties = () => {
  let [counties, setCounties] = useState<CustomSelectOption[] | undefined>([]);

  const getCountiesByState = useCallback((provinceName?: string) => {
    const findedCounties = PROVINCES.find(
      (province) => province.name === provinceName
    )?.counties.map((county) => ({
      label: county,
      value: county,
    }));

    setCounties(findedCounties);
  }, []);

  return {
    counties,
    getCountiesByState,
  };
};
