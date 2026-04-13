import { Link } from 'react-router-dom';
import PlayPause from '../play-pause/play-pause.component';

const TopChartCard = ({
  song,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  i,
}) => (
  <div className={`w-full flex flex-row items-center ${isPlaying && activeSong?.id === song?.id ? 'bg-gradient-to-t from-white/30 to-[#191624]/50' : ''} hover:bg-gradient-to-t from-white/30 to-[#191624]/50 py-2 px-3 rounded-lg cursor-pointer mb-2"`}>
    <h3 className="font-bold xl:text-xs text-sm text-white mr-2">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        loading="lazy"
        src={song?.album?.cover_medium}
        className="xl:w-14 sm:w-20 w-14 xl:h-14 sm:h-20 h-14 rounded-md"
        alt={song?.title}
      />
      <div className="flex flex-1 flex-col justify-center mx-1.5">
        <Link to={`/songs/${song.id}`}>
          <p className="xl:text-sm sm:text-lg text-sm font-bold text-white">{song?.title}</p>
        </Link>
        <Link to={`/artists/${song?.artist?.id}`}>
          <p className="text-xs font-bold text-gray-300 mt-1">
            { song?.artist?.name }
          </p>
        </Link>
      </div>
    </div>
    <PlayPause
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
    />
  </div>
);

export default TopChartCard;
