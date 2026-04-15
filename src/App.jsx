import { useRef } from 'react';
import { useSelector } from 'react-redux';
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
import useScrollToTop from './hooks/useScrollToTop';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);
  const { pathname } = useLocation();

  const scrollContainerRef = useRef(null);
  useScrollToTop(scrollContainerRef);

  const hideTopPlay = pathname.startsWith('/search') || pathname.startsWith('/songs') || pathname.startsWith('/artists');

  return (
    <div className="relative flex bg-black z-10">
      <AnimatedBackground coverImage={activeSong?.album?.cover_medium} />
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br">
        <Searchbar />

        <div ref={scrollContainerRef} className="sm:px-4 px-1 xl:h-[calc(100vh-2.5rem)] h-[calc(100vh-3rem)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col">
          <div className="flex-1 h-fit pb-40 order-last xl:order-none">
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
          {!hideTopPlay && (
            <div className="xl:sticky relative top-0 h-fit order-first xl:order-none">
              <TopPlay />
            </div>
          )}
        </div>
      </div>

      {activeSong?.title && (
        <div className="fixed inset-x-0 animate-slideup bottom-0 flex flex-col z-30">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
