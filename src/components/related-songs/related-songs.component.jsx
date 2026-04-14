import SongBar from '../songbar/songbar.component';

const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  artistId,
}) => (
  <div className="flex flex-col text-start">
    <h1 className="font-bold md:text-2xl text-xl text-white">Related Songs:</h1>
    <div className="mt-6 sm:mr-3 mr-1 sm:ml-0 ml-1 flex flex-col">
      {data?.length ? (
        data.map((song, i) => (
          <SongBar
            key={`${song.id}-${artistId}`}
            song={song}
            i={i}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
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
);

export default RelatedSongs;
