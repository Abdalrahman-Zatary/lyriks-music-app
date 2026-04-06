import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const OFFSET = Math.floor(Math.random() * 100);

export const deezerApi = createApi({
  reducerPath: 'deezerApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://api.deezer.com',
    baseUrl: 'https://corsproxy.io/?https://api.deezer.com',
  }),
  endpoints: (builder) => ({
    getTopTracks: builder.query({
      query: () => `/chart/0/tracks?limit=50&index=${OFFSET}`,
      transformResponse: (response) => response.data,
      keepUnusedDataFor: 0,
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/track/${songid}`,
    }),
  }),
});

export const {
  useGetTopTracksQuery,
  useGetSongDetailsQuery,
} = deezerApi;
