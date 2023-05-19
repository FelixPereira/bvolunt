import { State } from 'country-state-city';

const provinces = State.getStatesOfCountry('AO').map((province) => ({
  name: province.name,
  latitude: province.latitude,
  longitude: province.longitude,
}));

export const useGetCoords = (provinceName?: string) => {
  if (!provinceName) return null;

  const province = provinces.find((province) =>
    province.name.includes(provinceName)
  );
  if (!province) return null;

  return [province.latitude, province.longitude];
};
