import { ArtistCard, Error, Loader } from '../../components/components';
import { useGetTopArtistsQuery } from '../../redux/services/deezerApi';

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopArtistsQuery();
  // console.log(data);

  if (isFetching) return <Loader title="Loading top artists" />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Top Artists
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((artist, i) => (
          <ArtistCard key={artist.id} artist={artist} i={i} />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
