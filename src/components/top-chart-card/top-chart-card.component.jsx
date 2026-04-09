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
  <div className={`w-full flex flex-row items-center ${isPlaying && activeSong?.id === song?.id ? 'bg-[#4c426e]' : ''} hover:bg-[#4c426e] py-2 0-4 rounded-lg cursor-pointer mb-2"`}>
    <h3 className="font-bold text-xs text-white mr-2">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        src={song?.album?.cover_medium}
        className="w-14 h-14 rounded-md"
        alt={song?.title}
      />
      <div className="flex flex-1 flex-col justify-center mx-1.5">
        <Link to={`/songs/${song.id}`}>
          <p className="text-base font-bold text-white">{song?.title}</p>
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
