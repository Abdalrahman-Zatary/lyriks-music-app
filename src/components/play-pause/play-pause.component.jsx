import Lottie from 'lottie-react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import musicSond from '../../assets/animation/voice-animation.json';

const PlayPause = ({
  isPlaying,
  activeSong,
  song,
  isHoverSong,
  showDefaultPlay = false,
  sizeIcon,
  handlePlay,
  handlePause,
}) => {
  const isActive = isPlaying && activeSong?.title === song?.title;

  if (isActive && !isHoverSong) {
    return (
      <div className="animate-slidedown [animation-duration:0.5s]">
        <Lottie
          animationData={musicSond}
          loop
          autoplay
          style={{ width: `${sizeIcon}px`, height: `${sizeIcon}px` }}
          className="rounded-full opacity-90 bg-gray-300"
        />
      </div>
    );
  }

  if (isActive && isHoverSong) {
    return (
      <div className="animate-slideup [animation-duration:0.5s]">
        <FaPauseCircle
          size={sizeIcon}
          className="text-gray-300 cursor-pointer"
          onClick={handlePause}
        />
      </div>
    );
  }

  if (!isActive && isHoverSong) {
    return (
      <div className="animate-slideright [animation-duration:0.5s]">
        <FaPlayCircle
          size={sizeIcon}
          className="text-gray-300 cursor-pointer hover:scale-[1.15] transition-transform duration-300"
          onClick={handlePlay}
        />
      </div>
    );
  }

  if (!isActive && !isHoverSong && showDefaultPlay) {
    return (
      <div className="animate-slideright [animation-duration:0.5s]">
        <FaPlayCircle
          size={sizeIcon}
          className="text-gray-300 cursor-pointer hover:scale-[1.15] transition-transform duration-300"
          onClick={handlePlay}
        />
      </div>
    );
  }

  return null;
};

export default PlayPause;
