import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, songData, artistData, topAlbum }) => (
  <div className="relative w-full flex flex-col">
    <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-40">
      <div className="absolute inset-0 flex items-center">
        <img
          alt="art"
          src={artistId ? artistData?.picture : songData?.album?.cover}
          className="sm:w-48 w-40 sm:h-48 h-40 rounded-full object-cover border-2 shadow-xl shadow-black"
        />

        <div className="sm:ml-10 ml-3">
          <p className="font-bold sm:text-2xl text-lg text-white">
            {artistId ? artistData?.name : songData?.title}
          </p>
          <p className="sm:text-lg text-base text-gray-300 sm:mt-3 mt-1.5">
            {artistId ? topAlbum : songData?.release_date}
          </p>
          {!artistId && (
            <Link to={`/artists/${songData?.artist?.id}`}>
              <p className="sm:text-sm text-xs text-gray-400 sm:mt-3 mt-2">
                {songData?.artist?.name}
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default DetailsHeader;
