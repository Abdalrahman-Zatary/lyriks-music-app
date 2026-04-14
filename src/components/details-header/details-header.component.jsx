import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { setActiveSong, playPause } from '../../redux/features/playerSlice';
import PlayPause from '../play-pause/play-pause.component';
import MarqueeText from '../marquee-text/marquee-text.component';

const DetailsHeader = ({ artistId, songData, artistData, topAlbum }) => {
  const dispatch = useDispatch();

  const [isHoverSong, setIsHoverSong] = useState(false);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song: songData, data: [songData], i: 0 }));
    dispatch(playPause(true));
  };

  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full sm:bg-gradient-to-l bg-gradient-to-b from-transparent to-black sm:h-48 h-72">
        <div className="absolute inset-0 sm:text-start text-center flex sm:flex-row flex-col items-center sm:gap-10 gap-3">
          <div
            className="relative shrink-0"
            onMouseEnter={() => setIsHoverSong(true)}
            onMouseLeave={() => setIsHoverSong(false)}
          >
            <img
              loading="lazy"
              alt="art"
              src={artistId ? artistData?.picture : songData?.album?.cover}
              className={`sm:w-48 w-40 sm:h-48 h-40 rounded-full object-cover border-2  transition-shadow duration-500 ${isHoverSong ? 'shadow-[0_0_25px_rgba(209,213,219,0.6)]' : 'shadow-[0_0_15px_rgba(209,213,219,0.3)]'} ${isPlaying && activeSong?.id === songData?.id ? 'animate-spin [animation-duration:5s]' : 'animate-none'}`}
            />
            {!artistId && (
              <div
                className={`absolute inset-0 rounded-full flex items-center justify-center transition-colors duration-300 ${isHoverSong || (isPlaying && activeSong?.id === songData?.id) ? 'bg-black/50' : 'bg-black/20'}`}
              >
                <PlayPause
                  isPlaying={isPlaying}
                  activeSong={activeSong}
                  song={songData}
                  isHoverSong={isHoverSong}
                  showDefaultPlay
                  handlePause={handlePauseClick}
                  handlePlay={handlePlayClick}
                  sizeIcon={40}
                />
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <MarqueeText
              text={artistId ? artistData?.name : songData?.title}
              className="font-bold md:text-2xl sm:text-lg text-base text-white"
              containerClass="lg:w-[400px] md:w-[300px] sm:w-[350px] w-[170px]"
            />
            <MarqueeText
              text={artistId ? topAlbum : songData?.release_date}
              className="sm:text-lg text-base text-gray-300 sm:mt-3 mt-1.5"
              containerClass="lg:w-[400px] md:w-[300px] sm:w-[350px] w-[170px]"
            />
            {!artistId && (
              <Link to={`/artists/${songData?.artist?.id}`}>
                <p className="sm:text-sm text-xs text-gray-400 sm:mt-3 mt-2 truncate">
                  {songData?.artist?.name}
                </p>
              </Link>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
