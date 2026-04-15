import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import usePageTitle from '../../hooks/usePageTitle';
import { SongCard, Error, Loader } from '../../components/components';
import { useGetSearchTracksQuery } from '../../redux/services/deezerApi';

const Search = () => {
  const { searchTerm } = useParams();
  usePageTitle(`Search: ${searchTerm}`);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSearchTracksQuery(searchTerm);

  if (isFetching) return <Loader title={`Searching for "${searchTerm}"`} />;
  if (error) return <Error />;

  if (!data?.length) {
    return (
      <div className="flex flex-col items-center justify-center mt-20 animate-bounce [animation-duration:2s]">
        <p className="text-white text-xl font-bold text-center">
          No results foound: <br />
          <span className="text-base text-gray-300">&quot;{searchTerm}&quot;</span>
        </p>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col relative"
    >
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

