import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RiArrowDownSLine } from 'react-icons/ri';

import { nextSong, prevSong, playPause } from '../../redux/features/playerSlice';
import { Controls, Player, Seekbar, Track, VolumeBar, AnimatedBackground } from '../../components/components';
import disc from '../../assets/disco-icon.png';

const MusicPlayer = () => {
  const { activeSong, currentSongs, currentIndex, isActive, isPlaying } = useSelector((state) => state.player);
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentSongs.length) dispatch(playPause(true));
  }, [currentIndex]);

  const handlePlayPause = () => {
    if (!isActive) return;

    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  const handleNextSong = () => {
    dispatch(playPause(false));

    if (!shuffle) {
      dispatch(nextSong((currentIndex + 1) % currentSongs.length));
    } else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
    }
  };

  const handlePrevSong = () => {
    if (currentIndex === 0) {
      dispatch(prevSong(currentSongs.length - 1));
    } else if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)));
    } else {
      dispatch(prevSong(currentIndex - 1));
    }
  };

  return (
    <>
      <div className="relative sm:px-5 px-8 w-full flex items-center justify-between">
        <Track
          isPlaying={isPlaying}
          isActive={isActive}
          activeSong={activeSong}
          onExpand={() => setIsExpanded(true)}
        />
        <div className="flex-1 flex flex-col items-center justify-center">
          <Controls
            isPlaying={isPlaying}
            isActive={isActive}
            repeat={repeat}
            setRepeat={setRepeat}
            shuffle={shuffle}
            setShuffle={setShuffle}
            currentSongs={currentSongs}
            handlePlayPause={handlePlayPause}
            handlePrevSong={handlePrevSong}
            handleNextSong={handleNextSong}
          />
          <Seekbar
            value={appTime}
            min="0"
            max={duration}
            onInput={(event) => setSeekTime(event.target.value)}
            setSeekTime={setSeekTime}
            appTime={appTime}
          />
          <Player
            activeSong={activeSong}
            volume={volume}
            isPlaying={isPlaying}
            seekTime={seekTime}
            repeat={repeat}
            currentIndex={currentIndex}
            onEnded={handleNextSong}
            onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
            onLoadedData={(event) => setDuration(event.target.duration)}
          />
        </div>
        <VolumeBar
          value={volume}
          min="0"
          max="1"
          onChange={(event) => setVolume(event.target.value)}
          setVolume={setVolume}
        />
      </div>

      <div className={`absolute overflow-y-scroll hide-scrollbar top-[calc(70px-100vh)] inset-0 z-50 md:hidden bg-black flex flex-col justify-center items-center px-6 pt-12 pb-12 transition-transform duration-1000 ease-in-out ${isExpanded ? 'translate-y-0' : 'translate-y-full'}`}>
        <AnimatedBackground coverImage={activeSong?.album?.cover_medium} />
        <button
          type="button"
          onClick={() => setIsExpanded(false)}
          className="self-end text-white mb-6"
        >
          <RiArrowDownSLine size={38} />
        </button>
        <div className={`relative w-72 h-72 rounded-full mb-12 ${isPlaying && isActive ? 'animate-[spin_8s_linear_infinite]' : ''}`}>
          <img
            src={disc}
            className="absolute w-full h-full object-cover"
          />
          <img
            loading="lazy"
            src={activeSong?.album?.cover_medium}
            alt="cover art"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 rounded-full object-cover"
          />
        </div>
        <div className="w-full text-center mb-12">
          <p className="text-white font-bold text-3xl truncate">
            {activeSong?.title || 'No active Song'}
          </p>
          <p className="text-gray-300 text-base truncate mt-1">
            {activeSong?.artist?.name || 'Artist'}
          </p>
        </div>

        <div className="w-full">
          <Seekbar
            value={appTime}
            min="0"
            max={duration}
            onInput={(event) => setSeekTime(event.target.value)}
            setSeekTime={setSeekTime}
            appTime={appTime}
            isExpanded={isExpanded}
          />
        </div>

        <div className="w-[80%] sm:w-1/2">
          <Controls
            isPlaying={isPlaying}
            isActive={isActive}
            repeat={repeat}
            setRepeat={setRepeat}
            shuffle={shuffle}
            setShuffle={setShuffle}
            currentSongs={currentSongs}
            handlePlayPause={handlePlayPause}
            handlePrevSong={handlePrevSong}
            handleNextSong={handleNextSong}
            isExpanded={isExpanded}
          />
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;
