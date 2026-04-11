const Track = ({ isPlaying, isActive, activeSong, onExpand }) => (
  <div className="flex-1 flex items-center justify-start md:cursor-default cursor-pointer" onClick={onExpand}>
    <div
      className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-10 w-10 mr-4`}
    >
      <img
        loading="lazy"
        src={activeSong?.album?.cover_small}
        alt="cover art"
        className="rounded-full"
      />
    </div>
    <div className="w-[50%]">
      <p className="truncate text-white font-bold text-xs">
        {activeSong?.title ? activeSong?.title : 'No active Song'}
      </p>
      <p className="truncate text-gray-300 text-[10px]">
        {activeSong?.artist?.name ? activeSong?.artist?.name : 'No active Song'}
      </p>
    </div>
  </div>
);

export default Track;
