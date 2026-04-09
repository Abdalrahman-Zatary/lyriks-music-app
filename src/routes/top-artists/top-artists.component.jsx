import { ArtistCard, Error, Loader } from '../../components/components';
import { useGetTopArtistsQuery } from '../../redux/services/deezerApi';

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopArtistsQuery();

  if (isFetching) return <Loader title="Loading top artists" />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-xl text-white text-left mt-3 mb-7">
        Top Artists
      </h2>

      <div className="flex flex-wrap md:justify-start justify-center gap-4">
        {data?.map((artist, i) => (
          <ArtistCard key={artist.id} artist={artist} i={i} />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
