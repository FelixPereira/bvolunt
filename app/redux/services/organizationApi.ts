import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FetchQuery } from '../features/organizationQuerySlice';
import { OrganizationType } from '../../types';

export const organizationApi = createApi({
  reducerPath: 'organizationApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getOrganizations: builder.query<any, FetchQuery>({
      query: (filterQuery) => ({
        url: 'organizations',
        params: filterQuery,
      }),
    }),

    getOrganizationsByProvince: builder.query<OrganizationType[], string>({
      query: () => `organizations`,
      // transformResponse: (
      //   response: { organizations: OrganizationType[] },
      //   _,
      //   province
      // ) => {
      //   const organizations = response.organizations.filter(
      //     (organization) => organization.province === province
      //   );

      //   return organizations;
      // },
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
