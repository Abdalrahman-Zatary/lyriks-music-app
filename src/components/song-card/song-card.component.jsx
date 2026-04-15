import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import PlayPause from '../play-pause/play-pause.component';
import { playPause, setActiveSong } from '../../redux/features/playerSlice';

const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  const dispatch = useDispatch();
  const [isHoverSong, setIsHoverSong] = useState(false);
  const isCurrentlyActive = isPlaying && activeSong?.id === song?.id;

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div
      onMouseEnter={() => setIsHoverSong(true)}
      onMouseLeave={() => setIsHoverSong(false)}
      onClick={isTouchDevice && !isCurrentlyActive ? handlePlayClick : undefined}
      className="flex flex-col w-[157px] p-2 bg-gradient-to-tl from-white/40 to-[#191624]/50 backdrop-blur-sm animate-slideup rounded-md cursor-pointer"
    >
      <div className="relative w-full h-[135px] group">
        <div
          className={`absolute inset-0 bottom-[-6px] justify-center items-center bg-black bg-opacity-50 group-hover:flex duration-300 ${isHoverSong || isCurrentlyActive ? 'flex' : 'opacity-0'}`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            isHoverSong={isHoverSong}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            sizeIcon={40}
          />
        </div>
        <img
          loading="lazy"
          src={song?.album.cover_medium}
          alt={`${song?.title} - ${song?.artist?.name}`}
        />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-[12px] text-white truncate">
          <Link to={`/songs/${song?.id}`}>{song?.album?.title}</Link>
        </p>
        <p className="text-[9px] truncate text-gray-300 mt-0.5">
          <Link
            to={song.artist ? `/artists/${song?.artist?.id}` : '/top-artists'}
          >
            {song?.artist?.name}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
