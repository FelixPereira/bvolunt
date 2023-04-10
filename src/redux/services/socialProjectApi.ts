import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SocialProjectType } from '../../types';
import { FetchQuery } from '../features/fetchQuerySlice';

export const socialProjectApi = createApi({
  reducerPath: 'socialProjectApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getSocialProjects: builder.query<any, FetchQuery>({
      query: (filterQuery) => ({
        url: 'projects',
        params: filterQuery,
      }),
    }),
  }),
});

export const { useGetSocialProjectsQuery } = socialProjectApi;
