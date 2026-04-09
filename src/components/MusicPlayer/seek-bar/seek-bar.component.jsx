const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime, isExpanded }) => {
  const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;

  return (
    <div className={`${isExpanded ? 'flex' : 'hidden'} sm:flex flex-row items-center`}>
      <button
        type="button"
        onClick={() => setSeekTime(appTime - 5)}
        className={`${isExpanded ? 'block mr-4' : 'hidden'} lg:mr-4 lg:block text-white`}
      >
        -
      </button>
      <p className="text-white">{value === 0 ? '0:00' : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className={`${isExpanded ? 'w-full' : 'w-24'} md:block md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg accent-blue-500`}
      />
      <p className="text-white">{max === 0 ? '0:00' : getTime(max)}</p>
      <button
        type="button"
        onClick={() => setSeekTime(appTime + 5)}
        className={`${isExpanded ? 'block ml-4' : 'hidden'} lg:ml-4 lg:block text-white`}
      >
        +
      </button>
    </div>
  );
};

export default Seekbar;
