import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, songData, artistData }) => (
  <div className="relative w-full flex flex-col">
    <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28">
      <div className="absolute inset-0 flex items-center">
        <img
          alt="art"
          src={artistId ? artistData?.artist?.picture : songData?.album?.cover}
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
        />

        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">
            {artistId ? artistData?.artist?.name : songData?.title}
          </p>
          <p className="text-2xl text-gray-300 mt-3">
            {artistId ? null : songData?.release_date}
          </p>
          {!artistId && (
            <Link to={`/artists/${songData?.artist?.id}`}>
              <p className="text-lg text-gray-400 mt-3">
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
