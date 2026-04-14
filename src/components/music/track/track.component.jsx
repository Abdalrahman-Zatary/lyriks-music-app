import MarqueeText from '../../marquee-text/marquee-text.component';

const Track = ({ isPlaying, isActive, activeSong, onExpand }) => (
  <div className="flex-1 flex items-center justify-start md:cursor-default cursor-pointer" onClick={onExpand}>
    <div
      className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-10 w-10 sm:mr-2 mr-4`}
    >
      <img
        loading="lazy"
        src={activeSong?.album?.cover_small}
        alt="cover art"
        className="rounded-full"
      />
    </div>
    <div className="w-[50%]">
      <MarqueeText
        text={activeSong?.title ? activeSong?.title : 'No active Song'}
        className="text-white font-bold text-xs"
        containerClass="sm:w-[200px] w-[140px]"
      />
      <p className="truncate text-gray-300 text-[10px]">
        {activeSong?.artist?.name ? activeSong?.artist?.name : 'No active Song'}
      </p>
    </div>
  </div>
);

export default Track;
