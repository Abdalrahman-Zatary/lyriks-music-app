import { Link } from 'react-router-dom';

import PlayPause from '../play-pause/play-pause.component';

const SongBar = ({ song, i, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${artistId ? 'bg-[#4c426e]' : ''} ${isPlaying && activeSong?.id === song?.id ? 'bg-[#4c426e]' : 'bg-transparent'} py-2 p-3 rounded-lg cursor-pointer mb-2`}>
    <h3 className="font-bold text-sm text-white mr-2">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        className="w-20 h-20 rounded-lg"
        src={artistId ? song?.album?.cover : song?.album?.cover_medium}
        alt={artistId ? song?.artist?.name : song?.title}
      />
      <div className="flex-1 flex flex-col justify-center mx-4">
        <Link to={`/songs/${song.id}`}>
          <p className="text-lg font-bold text-white">
            {song?.title}
          </p>
        </Link>
        <p className="text-sm text-gray-300 mt-1.5">
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
          handlePause={handlePauseClick}
          handlePlay={() => handlePlayClick(song, i)}
        />
      )
      : null}
  </div>
);

export default SongBar;
