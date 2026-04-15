import { Link } from 'react-router-dom';
import { useState } from 'react';

import PlayPause from '../play-pause/play-pause.component';
import MarqueeText from '../marquee-text/marquee-text.component';

const SongBar = ({
  song,
  i,
  artistId,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  noLink = false,
}) => {
  const [isHoverSong, setisHoverSong] = useState(false);

  const titleContent = (
    <MarqueeText
      text={song?.title}
      className="md:text-lg sm:text-base text-sm font-bold text-white"
      containerClass="lg:w-[400px] md:w-[350px] sm:w-[375px] w-[175px]"
    />
  );

  return (
    <div
      onMouseEnter={() => setisHoverSong(true)}
      onMouseLeave={() => setisHoverSong(false)}
      className={`w-full flex flex-row items-center hover:bg-gradient-to-t from-white/30 to-[#191624]/50 py-2 xl:pr-6 sm:p-3 p-0 rounded-lg sm:mb-2 mb-1 ${artistId ? 'bg-gradient-to-t from-white/30 to-[#191624]/50' : 'bg-transparent'} ${isPlaying && activeSong?.id === song?.id ? 'bg-gradient-to-t from-white/30 to-[#191624]/50' : 'bg-transparent'}`}
    >
      <h3 className="font-bold sm:text-sm text-xs text-white mr-2">{i + 1}.</h3>
      <div className="flex-1 flex flex-row justify-between items-center">
        <img
          loading="lazy"
          className="sm:w-20 w-14 sm:h-20 h-14 rounded-lg"
          src={artistId ? song?.album?.cover : song?.album?.cover_medium}
          alt={artistId ? song?.artist?.name : song?.title}
        />
        <div className="flex-1 flex flex-col justify-center overflow-hidden sm:mx-4 mx-2">
          { noLink ? titleContent : <Link to={`/songs/${song.id}`}>{titleContent}</Link> }
          <MarqueeText
            text={song?.album?.title}
            className="md:text-sm text-xs text-gray-300 mt-1"
            containerClass="lg:w-[400px] md:w-[300px] sm:w-[350px] w-[125px]"
          />
        </div>
      </div>
      {!artistId ? (
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          isHoverSong={isHoverSong}
          showDefaultPlay
          sizeIcon={30}
          handlePause={handlePauseClick}
          handlePlay={() => handlePlayClick(song, i)}
        />
      ) : null}
    </div>
  );
};

export default SongBar;
