import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { SongCard, Error, Loader } from '../../components/components';
import { useGetSearchTracksQuery } from '../../redux/services/deezerApi';

const Search = () => {
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSearchTracksQuery(searchTerm);

  if (isFetching) return <Loader title={`Searching for "${searchTerm}"`} />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-xl text-white text-left mt-3 mb-7">
        Showing results for <span className="font-black">{searchTerm}</span>
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-4">
        {data?.map((song, i) => (
          <SongCard
            key={song.id}
            song={song}
            activeSong={activeSong}
            isPlaying={isPlaying}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;

