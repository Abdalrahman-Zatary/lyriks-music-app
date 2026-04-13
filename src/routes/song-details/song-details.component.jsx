import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import usePageTitle from '../../hooks/usePageTitle';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../../components/components';
import { setActiveSong, playPause } from '../../redux/features/playerSlice';

import { useGetSongDetailsQuery, useGetRelatedSongsQuery } from '../../redux/services/deezerApi';
import { useGetSongLyricsQuery } from '../../redux/services/lyricsApi';

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data: songData,
    isFetching: isFetchingSongDetails,
    error: errorSong,
  } = useGetSongDetailsQuery({ songid });

  usePageTitle(songData ? `${songData.title} — ${songData.artist?.name}` : 'Song Details');

  const {
    data,
    isFetching: isFetchingRelatedSongs,
    error,
  } = useGetRelatedSongsQuery(songData?.artist?.id, { skip: !songData });

  const { data: lyricsData, isFetching: isFetchingLyrics } = useGetSongLyricsQuery({
    artist: songData?.artist?.name,
    title: songData?.title,
  }, { skip: !songData });

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  if (isFetchingLyrics || isFetchingSongDetails || isFetchingRelatedSongs) {
    return <Loader title="Searching song details" />;
  }
  if (error || errorSong) return <Error />;

  return (
    <div className="flex flex-col gap-8">
      <DetailsHeader artistId="" songData={songData} />
      <div className="mb-10">
        <h2 className="text-white text-2xl font-bold">Lyrics:</h2>
        <div className="mt-5">
          {lyricsData?.lyrics ? (
            <p className="text-white md:text-base text-sm my-1 whitespace-pre-line">
              {lyricsData.lyrics}
            </p>
          ) : (
            <p className="text-white md:text-base text-sm my-1">
              Sorry, no lyrics found!
            </p>
          )}
        </div>
      </div>
      <RelatedSongs
        data={data}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};

export default SongDetails;
