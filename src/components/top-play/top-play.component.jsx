import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

import TopChartCard from '../top-chart-card/top-chart-card.component';
import { playPause, setActiveSong } from '../../redux/features/playerSlice';
import { useGetTopChartsQuery, useGetTopArtistsQuery } from '../../redux/services/deezerApi';

import 'swiper/css';
import 'swiper/css/free-mode';

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: topSongsData } = useGetTopChartsQuery();
  const { data: topArtistsData } = useGetTopArtistsQuery();
  const divRef = useRef(null);

  const topPlays = topSongsData?.slice(0, 5);
  const topArtists = topArtistsData?.slice(0, 7);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data: topSongsData, i }));
    dispatch(playPause(true));
  };

  return (
    <div
      ref={divRef}
      className="xl:ml-4 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[380px] max-w-full flex flex-col"
    >
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center xl:mt-0 mt-1">
          <h2 className="text-white font-bold xl:text-base md:text-xl text-lg">Top Charts</h2>
          <Link to="/top-charts">
            <p className="text-gray-300 text-xs cursor-pointer">See more</p>
          </Link>
        </div>

        <div className="mt-3 flex flex-col gap-1">
          {topPlays?.map((song, i) => (
            <TopChartCard
              key={song.id}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(song, i)}
              i={i}
            />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col mt-4">
        <div className="flex flex-row justify-between items-center xl:my-0 my-2">
          <h2 className="text-white font-bold xl:text-base md:text-xl text-lg">Top Artists</h2>
          <Link to="/top-artists">
            <p className="text-gray-300 text-xs cursor-pointer">See more</p>
          </Link>
        </div>

        <Swiper
          slidesPerView="auto"
          spaceBetween={8}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4 xl:w-auto w-[95%]"
        >
          {topArtists?.map((artist) => (
            <SwiperSlide
              key={artist.id}
              style={{ width: '22%', height: '22%' }}
              className="rounded-full w-full animate-slideright"
            >
              <Link to={`/artists/${artist?.id}`}>
                <img
                  loading="lazy"
                  src={artist?.picture}
                  alt={artist?.name}
                  className="rounded-full w-full object-cover"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopPlay;
