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
        // response: { organizations: OrganizationType[] },
        { organizations },
        request,
        { province, searchTerm, orderBy }
      ) => {
        let organizations2: OrganizationType[];

        if (province) {
          organizations2 = organizations.filter(
            (organ: OrganizationType) => organ.province === province
          );

          console.log(organizations2)
        } else {
          organizations2 = organizations;
        }

        console.log(organizations2)
        return organizations2;

        // if (orderBy) return response.organizations.sort();

        // if (province)
        //   return response.organizations.filter(
        //     (organ) => organ.province === province
        //   );
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
