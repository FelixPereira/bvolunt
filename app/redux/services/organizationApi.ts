import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FetchQuery } from '../features/organizationQuerySlice';
import { SocialOrganization } from '@prisma/client';

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

    getOrganizationsByProvince: builder.query<SocialOrganization[], string>({
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
    getOrganizationById: builder.query<SocialOrganization, string | undefined>({
      query: (organizationId) => `organizations/${organizationId}`,
      transformResponse: (response: { organization: SocialOrganization }) =>
        response.organization,
    }),
  }),
});

export const {
  useGetOrganizationsQuery,
  useGetOrganizationsByProvinceQuery,
  useGetOrganizationByIdQuery,
} = organizationApi;
