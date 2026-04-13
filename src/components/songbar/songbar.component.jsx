import { Link } from 'react-router-dom';
import { useState } from 'react';

import PlayPause from '../play-pause/play-pause.component';

const SongBar = ({ song, i, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => {
  const [isHoverSong, setisHoverSong] = useState(false);

  return (
    <div
      onMouseEnter={() => setisHoverSong(true)}
      onMouseLeave={() => setisHoverSong(false)}
      className={`w-full flex flex-row items-center hover:bg-gradient-to-t from-white/30 to-[#191624]/50 py-2 xl:pr-6 p-3 rounded-lg cursor-pointer sm:mb-2 mb-1 ${artistId ? 'bg-gradient-to-t from-white/30 to-[#191624]/50' : ''} ${isPlaying && activeSong?.id === song?.id ? 'bg-gradient-to-t from-white/30 to-[#191624]/50' : 'bg-transparent'}`}
    >
      <h3 className="font-bold sm:text-sm text-xs text-white mr-2">{i + 1}.</h3>
      <div className="flex-1 flex flex-row justify-between items-center">
        <img
          loading="lazy"
          className="sm:w-20 w-14 sm:h-20 h-14 rounded-lg"
          src={artistId ? song?.album?.cover : song?.album?.cover_medium}
          alt={artistId ? song?.artist?.name : song?.title}
        />
        <div className="flex-1 flex flex-col justify-center mx-4">
          <Link to={`/songs/${song.id}`}>
            <p className="sm:text-lg text-sm font-bold text-white">
              {song?.title}
            </p>
          </Link>
          <p className="md:text-sm text-xs text-gray-300 mt-1">
            {song?.album?.title}
          </p>
        </div>
      </div>
      {!artistId
        ? (
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            isHoverSong={isHoverSong}
            showDefaultPlay
            sizeIcon={35}
            handlePause={handlePauseClick}
            handlePlay={() => handlePlayClick(song, i)}
          />
        )
        : null}
    </div>
  );
};

export default SongBar;
