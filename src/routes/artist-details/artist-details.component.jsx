import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../../components/components';

import {
  useGetRelatedSongsQuery,
  useGetArtistDetailsQuery,
} from '../../redux/services/deezerApi';

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error: errorArtist,
  } = useGetArtistDetailsQuery(artistId);
  const {
    data,
    isFetching: isFetchingRelatedSongs,
    error,
  } = useGetRelatedSongsQuery(artistId, { skip: !artistData });

  if (isFetchingArtistDetails || isFetchingRelatedSongs) return <Loader title="Loading artist details" />;
  if (errorArtist || error) return <Error />;

  return (
    <div className="flex flex-col gap-10">
      <DetailsHeader artistId={artistId} artistData={artistData} topAlbum={data[0]?.album?.title} />

      <RelatedSongs
        data={data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;
