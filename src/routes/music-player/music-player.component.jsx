import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RiArrowDownSLine } from 'react-icons/ri';

import { nextSong, prevSong, playPause, setActiveSong, setIsExpanded } from '../../redux/features/playerSlice';
import { Controls, Player, Seekbar, Track, VolumeBar, SongBar } from '../../components/components';
import MarqueeText from '../../components/marquee-text/marquee-text.component';
import { useGetRelatedSongsQuery } from '../../redux/services/deezerApi';
import disc from '../../assets/disco-icon.png';

const MusicPlayer = () => {
  const { activeSong, currentSongs, currentIndex, isActive, isPlaying } = useSelector((state) => state.player);
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const dispatch = useDispatch();

  const {
    data: relatedSongs,
  } = useGetRelatedSongsQuery(activeSong?.artist?.id, { skip: !activeSong?.artist?.id });

  const { isExpanded } = useSelector((state) => state.player);

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

  const handleRelatedPause = () => {
    dispatch(playPause(false));
  };
  const handleRelatedPlay = (song, i) => {
    dispatch(setActiveSong({ song, data: relatedSongs, i }));
    dispatch(playPause(true));
  };

  return (
    <>
      <div className={`${isExpanded ? 'max-h-0 opacity-0 translate-y-6 pointer-events-none' : 'h-[70px] max-h-[70px] opacity-100 translate-y-0'} overflow-hidden transition-all duration-1000 ease-in-out bg-gradient-to-b from-white/30 to-[#191624]/10 backdrop-blur-lg rounded-t-2xl flex items-center justify-between sm:px-8 px-5`}>
        <Track
          isPlaying={isPlaying}
          isActive={isActive}
          activeSong={activeSong}
          onExpand={() => dispatch(setIsExpanded(true))}
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

      <div className={`${isExpanded ? 'lg:h-fit max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-6 pointer-events-none py-0'}  overflow-y-auto hide-scrollbar transition-all duration-1000 ease-in-out flex lg:flex-row flex-col lg:items-start items-center lg:justify-between justify-start lg:px-4 md:px-8 sm:px-6 px-2`}>
        <div className="flex flex-col lg:basis-3/5 items-center lg:sticky lg:top-0 lg:overflow-hidden">
          <button
            type="button"
            onClick={() => dispatch(setIsExpanded(false))}
            className="self-end text-white lg:pt-4 lg:mt-0 mt-8 lg:pr-6 lg:pb-0 pb-6"
          >
            <RiArrowDownSLine size={38} />
          </button>

          <div className={`relative sm:w-96 w-72 sm:h-96 h-72 rounded-full shrink-0 overflow-hidden lg:mb-6 mb-10 ${isPlaying && isActive ? 'animate-[spin_8s_linear_infinite]' : ''}`}>
            <img
              src={disc}
              alt="disc"
              className="absolute inset-0 w-full h-full object-cover rounded-full"
            />
            <img
              loading="lazy"
              src={activeSong?.album?.cover_medium}
              alt="cover art"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 rounded-full object-cover"
            />
          </div>

          <div className="sm:w-fit w-full text-center pb-10">
            <MarqueeText
              text={activeSong?.title}
              className="text-white font-bold md:text-3xl text-2xl"
              containerClass="lg:w-[450px] w-[300px]"
            />
            <p className="text-gray-300 md:text-lg text-base truncate">
              {activeSong?.artist?.name || 'Artist'}
            </p>
          </div>

          <div className="md:w-fit w-full pb-2">
            <Seekbar
              value={appTime}
              min="0"
              max={duration}
              onInput={(event) => setSeekTime(event.target.value)}
              setSeekTime={setSeekTime}
              appTime={appTime}
            />
          </div>

          <div className="md:w-fit sm:w-1/2 w-[80%] pb-10">
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
          </div>
        </div>

        <div className={`w-full lg:basis-2/5 ${isExpanded ? 'animate-slideup [animation-duration:1.5s]' : ''}`}>
          <h1 className="font-bold md:text-2xl text-xl text-white lg:mt-4 mb-6">Related Songs:</h1>
          {relatedSongs?.length ? (
            relatedSongs.map((song, i) => (
              <SongBar
                key={`${song.id}-related`}
                song={song}
                i={i}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handleRelatedPause}
                handlePlayClick={handleRelatedPlay}
                noLink
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-10 gap-3 animate-slowfade">
              <span className="text-6xl select-none">🦗</span>
              <p className="text-white text-lg font-bold text-center">
                No related songs found for this artist.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;
