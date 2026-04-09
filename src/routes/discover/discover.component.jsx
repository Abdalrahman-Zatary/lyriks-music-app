import { useDispatch, useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../../components/components';
import { genres } from '../../assets/constants';
import { selectGenreListId } from '../../redux/features/playerSlice';
import { useGetTracksByGenreQuery } from '../../redux/services/deezerApi';

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTracksByGenreQuery(genreListId);

  if (isFetching) return <Loader title="Loading songs..." />;
  if (error) return <Error />;

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-7">
        <h2 className="font-bold text-xl text-white text-left">
          Discover {genreTitle || 'Soul'}
        </h2>
        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId}
          className="bg-black text-gray-300 p-2 text-xs rounded-md outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
          ;
        </select>
      </div>
      <div className="flex flex-wrap md:justify-start justify-center gap-4">
        {data.map((song, i) => (
          <SongCard
            key={song.id}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
