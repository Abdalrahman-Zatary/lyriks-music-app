import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import {
  Searchbar,
  Sidebar,
  TopPlay,
  AnimatedBackground,
} from './components/components';
import {
  ArtistDetails,
  TopArtists,
  AroundYou,
  Discover,
  Search,
  SongDetails,
  TopCharts,
  MusicPlayer,
} from './routes/routes';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);
  const { pathname } = useLocation();
  const appRef = useRef(null);

  const isSearchPage = pathname.startsWith('/search');

  useEffect(() => {
    appRef.current?.scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <div className="relative flex">
      <AnimatedBackground coverImage={activeSong?.album?.cover_medium} />
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br">
        <Searchbar />

        <div className="px-4 xl:h-[calc(100vh-2rem)] h-[calc(100vh-3rem)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          <div ref={appRef} className="relative inset-0" />
          <div
            className={`xl:sticky relative top-0 h-fit ${isSearchPage ? 'hidden' : ''}`}
          >
            <TopPlay />
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="fixed h-[70px] bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-2xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
