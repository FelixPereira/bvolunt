import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { OrganizationType } from '../../components/organization/type';

export const organizationApi = createApi({
  reducerPath: 'organizationApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  tagTypes: ['Organization'],
  endpoints: (builder) => ({
    getOrganizations: builder.query<any, void>({
      query: () => 'organizations',
    }),
    getOrganizationById: builder.query<any, string>({
      query: (organizationId) => `organizations/${organizationId}`
    })
  }),
});

export const {
  useGetOrganizationsQuery,
  useGetOrganizationByIdQuery
} = organizationApi;
