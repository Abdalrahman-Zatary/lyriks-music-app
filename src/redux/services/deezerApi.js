import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const deezerApi = createApi({
  reducerPath: 'deezerApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://api.deezer.com',
    baseUrl: 'https://corsproxy.io/?https://api.deezer.com',
  }),
  endpoints: (builder) => ({
    getTopTracks: builder.query({
      query: () => '/chart/0/tracks?limit=50',
      transformResponse: (response) => response.data,
    }),
  }),
});

export const {
  useGetTopTracksQuery,
} = deezerApi;
