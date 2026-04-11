import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import PlayPause from '../play-pause/play-pause.component';
import { playPause, setActiveSong } from '../../redux/features/playerSlice';

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col w-[157px] p-2 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-md cursor-pointer">
      <div className="relative w-full h-[135px] group">
        <div
          className={`absolute inset-0 bottom-[-12px] justify-center items-center bg-black bg-opacity-50 group-hover:flex ${isPlaying && activeSong?.id === song?.id ? 'flex bg-black bg-opacity-70' : 'hidden'}`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img src={song?.album.cover_medium} alt={`${song?.title} - ${song?.artist?.name}`} />
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
