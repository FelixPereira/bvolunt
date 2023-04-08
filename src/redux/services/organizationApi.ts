import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { OrganizationType } from '../../components/organization/type';
import { FetchQuery } from '../features/fetchQuerySlice';

export const organizationApi = createApi({
  reducerPath: 'organizationApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getOrganizations: builder.query<any, FetchQuery>({
      query: (filterQuery) => ({
        url: 'organizations',
        params: filterQuery,
      }),

      transformResponse: (
        response: { organizations: OrganizationType[] },
        _,
        { province, searchTerm, orderBy }
      ) => {
        let filteredOrganizations: OrganizationType[];

        if (province) {
          filteredOrganizations = response.organizations.filter(
            (organization: OrganizationType) =>
              organization.province === province
          );
        } else if (orderBy) {
          if (orderBy === 'desc') {
            filteredOrganizations = response.organizations;
          } else {
            filteredOrganizations = response.organizations.sort(
              (a: OrganizationType, b: OrganizationType) => {
                return (
                  Number(new Date(a.createdAt)) - Number(new Date(b.createdAt))
                );
              }
            );
          }
        } else if (searchTerm) {
          filteredOrganizations = response.organizations.filter(
            (organization: OrganizationType) => {
              return organization.name.includes(searchTerm);
            }
          );
        } else {
          filteredOrganizations = response.organizations;
        }

        console.log(filteredOrganizations);
        return filteredOrganizations;
      },
    }),

    getOrganizationsByProvince: builder.query<OrganizationType[], string>({
      query: () => `organizations`,
      transformResponse: (
        response: { organizations: OrganizationType[] },
        _,
        province
      ) => {
        const organizations = response.organizations.filter(
          (organization) => organization.province === province
        );

        return organizations;
      },
    }),
    getOrganizationById: builder.query<OrganizationType, string | undefined>({
      query: (organizationId) => `organizations/${organizationId}`,
      transformResponse: (response: { organization: OrganizationType }) =>
        response.organization,
    }),
  }),
});

export const {
  useGetOrganizationsQuery,
  useGetOrganizationsByProvinceQuery,
  useGetOrganizationByIdQuery,
} = organizationApi;
