import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ artist, i }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/artists/${artist?.id}`)}
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
    >
      <img alt="artist" src={artist?.picture_medium} className="w-full h-56 rounded-lg" />
      <p className="mt-4 font-semibold text-lg text-white truncate">
        {i + 1}. {artist?.name}
      </p>
    </div>
  );
};

export default ArtistCard;
