import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { OrganizationType } from '../../components/organization/type';
import { FetchQuery } from '../fetchQuerySlice';

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
        request,
        { province, searchTerm, orderBy }
      ) => {
        // if (province)
        //   return response.organizations.filter(
        //     (organ) => organ.province === province
        //   );

        // if (orderBy) return response.organizations.sort();

        // if (province)
        //   return response.organizations.filter(
        //     (organ) => organ.province === province
        //   );

        return response.organizations;
      },
    }),
    getOrganizationById: builder.query<OrganizationType, string | undefined>({
      query: (organizationId) => `organizations/${organizationId}`,
      transformResponse: (response: { organization: OrganizationType }) =>
        response.organization,
    }),
  }),
});

export const { useGetOrganizationsQuery, useGetOrganizationByIdQuery } =
  organizationApi;
