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
        } else if (orderBy) {
          organizations2 = organizations.sort((a: OrganizationType, b: OrganizationType) => {
            // console.log(a, b)
            console.log(Number(a._id) - Number(b._id))
            return Number(a._id) - Number(b._id)
            // if (orderBy === 'asc') return -1
            
            // return 1;  b
          });
          // organizations2 = organizations.map((org: OrganizationType) => {
          //   console.log(org)
          //   return {
          //     ...org,
          //     name: org.name + 'new'
          //   };
          // });
          console.log('Order by: ', orderBy);
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
