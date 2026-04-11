import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ artist, i }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/artists/${artist?.id}`)}
      className="flex flex-col w-[157px] p-2 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-md cursor-pointer"
    >
      <img loading="lazy" alt="artist" src={artist?.picture_medium} className="w-full h-[135px] rounded-md" />
      <p className="mt-4 font-semibold text-xs text-white truncate">
        {i + 1}. {artist?.name}
      </p>
    </div>
  );
};

export default ArtistCard;
