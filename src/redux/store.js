import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { deezerApi } from './services/deezerApi';
import { lyricsApi } from './services/lyricsApi';

import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    [deezerApi.reducerPath]: deezerApi.reducer,
    [lyricsApi.reducerPath]: lyricsApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(deezerApi.middleware).concat(lyricsApi.middleware),
});

setupListeners(store.dispatch);
