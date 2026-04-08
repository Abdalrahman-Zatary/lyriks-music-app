import { HiOutlineHashtag, HiOutlineHome, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';

export const genres = [
  { title: 'Soul', value: 'soul' },
  { title: 'Soul-RNP', value: 'soulrnp' },
  { title: 'Funk', value: 'funk' },
  { title: 'Hip Hop', value: 'hip hop' },
  { title: 'Electronic', value: 'electronic' },
  { title: 'R&B', value: 'rnb' },
  { title: 'Jazz', value: 'jazz' },
  { title: 'Latin', value: 'latin' },
  { title: 'Anime', value: 'anime' },
  { title: 'K-Pop', value: 'kpop' },
  { title: 'Soundtrack', value: 'soundtrack' },
  { title: 'Metal', value: 'metal' },
  { title: 'Classical', value: 'classical' },
  { title: 'Dance', value: 'dance' },
  { title: 'alternative', value: 'alternative' },
  { title: 'Film', value: 'film tv' },
  { title: 'Worldwide', value: 'worldwide' },
  { title: 'Reggae', value: 'reggae dance hall' },
  { title: 'House', value: 'house' },
  { title: 'Arabic', value: 'بلوز' },
];

export const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];
