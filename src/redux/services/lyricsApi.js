import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const lyricsApi = createApi({
  reducerPath: 'lyricsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.lyrics.ovh',
  }),
  endpoints: (builder) => ({
    getSongLyrics: builder.query({
      query: ({ artist, title }) => `/v1/${artist}/${title}`,
    }),
  }),
});

export const { useGetSongLyricsQuery } = lyricsApi;
