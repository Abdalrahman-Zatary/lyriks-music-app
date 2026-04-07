import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import { SongCard, Error, Loader } from '../../components/components';
import { useGetSongsByCountryQuery } from '../../redux/services/deezerApi';

const AroundYou = () => {
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByCountryQuery(country, {
    skip: !country,
  });

  useEffect(() => {
    const getCountry = async () => {
      try {
        const res = await axios.get('https://ipapi.co/json/');
        const countryCode = res.data.country_code;
        setCountry(countryCode || 'SY');
      } catch (err) {
        console.log(err);
        setCountry('SY');
      } finally {
        setLoading(false);
      }
    };
    getCountry();
  }, []);

  if (isFetching && loading) return <Loader title="Loading songs around you" />;
  if (error && country) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Around You <span className="font-black">{country}</span>
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
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

export default AroundYou;
