import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const OFFSET = Math.floor(Math.random() * 100);

export const deezerApi = createApi({
  reducerPath: 'deezerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://corsproxy.io/?https://api.deezer.com',
  }),
  endpoints: (builder) => ({
    getRandomTopTracks: builder.query({
      query: () => `/chart/0/tracks?limit=50&index=${OFFSET}`,
      transformResponse: (response) => response.data,
      keepUnusedDataFor: 0,
    }),
    getTopCharts: builder.query({
      query: () => `/chart/0/tracks?limit=50&_=${Date.now()}`,
      transformResponse: (response) => response.data,
      keepUnusedDataFor: 0,
    }),
    getTopArtists: builder.query({
      query: () => '/chart/0/artists?limit=50',
      transformResponse: (response) => response.data,
    }),
    getTracksByGenre: builder.query({
      query: (genre) => `/search/track?q=${genre}&limit=50&index=${OFFSET}&order=RANKING`,
      transformResponse: (response) => response.data,
      keepUnusedDataFor: 0,
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/track/${songid}`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `/artist/${artistId}/`,
    }),
    getRelatedSongs: builder.query({
      query: (artistId) => `/artist/${artistId}/top?limit=20`,
      transformResponse: (response) => response.data,
    }),
    getSongsByCountry: builder.query({
      query: (countryCode) => `/chart/${countryCode}/tracks?limit=50`,
      transformResponse: (response) => response.data,
    }),
    getSearchTracks: builder.query({
      query: (searchTerm) => `/search?q=${searchTerm}`,
      transformResponse: (response) => response.data,
    }),
  }),
});

export const {
  useGetRandomTopTracksQuery,
  useGetTopChartsQuery,
  useGetTopArtistsQuery,
  useGetTracksByGenreQuery,
  useGetSongDetailsQuery,
  useGetArtistDetailsQuery,
  useGetRelatedSongsQuery,
  useGetSongsByCountryQuery,
  useGetSearchTracksQuery,
} = deezerApi;
