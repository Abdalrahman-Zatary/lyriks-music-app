const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime, isExpanded }) => {
  const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;

  return (
    <div className={`${isExpanded ? 'flex' : 'hidden'} sm:flex flex-row items-center`}>
      <button
        type="button"
        onClick={() => setSeekTime(appTime - 5)}
        className={`${isExpanded ? 'block mr-4' : 'hidden'} lg:mr-2 text-sm lg:block text-white`}
      >
        -
      </button>
      <p className="text-white text-[11px]">{value === 0 ? '0:00' : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className={`${isExpanded ? 'w-full' : 'w-24'} md:block range md:w-72 h-[3px] mx-3 rounded-md accent-blue-500`}
      />
      <p className="text-white text-[11px]">{max === 0 ? '0:00' : getTime(max)}</p>
      <button
        type="button"
        onClick={() => setSeekTime(appTime + 5)}
        className={`${isExpanded ? 'block ml-4' : 'hidden'} lg:ml-2 text-sm lg:block text-white`}
      >
        +
      </button>
    </div>
  );
};

export default Seekbar;
