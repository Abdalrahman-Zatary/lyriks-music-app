import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const Controls = ({
  isPlaying,
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  currentSongs,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}) => {
  const { isExpanded } = useSelector((state) => state.player);

  return (
    <div className="flex items-center justify-around md:w-36 lg:w-60">
      <BsArrowRepeat
        size={13}
        color={repeat ? 'red' : 'white'}
        onClick={() => setRepeat((prev) => !prev)}
        className={`${isExpanded ? '' : 'hidden'} sm:block cursor-pointer`}
      />
      {currentSongs?.length && (
        <MdSkipPrevious
          size={20}
          color="#FFF"
          className="cursor-pointer"
          onClick={handlePrevSong}
        />
      )}
      {isPlaying ? (
        <BsFillPauseFill
          size={28}
          color="#FFF"
          onClick={handlePlayPause}
          className="cursor-pointer"
        />
      ) : (
        <BsFillPlayFill
          size={28}
          color="#FFF"
          onClick={handlePlayPause}
          className="cursor-pointer"
        />
      )}
      {currentSongs?.length && (
        <MdSkipNext
          size={20}
          color="#FFF"
          className="cursor-pointer"
          onClick={handleNextSong}
        />
      )}
      <BsShuffle
        size={13}
        color={shuffle ? 'red' : 'white'}
        onClick={() => setShuffle((prev) => !prev)}
        className={`${isExpanded ? '' : 'hidden'} sm:block cursor-pointer`}
      />
    </div>
  );
};

export default Controls;
