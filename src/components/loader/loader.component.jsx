import loader from '../../assets/loader.svg';

const Loader = ({ title }) => (
  <div className="w-full flex justify-center items-center flex-col">
    <img loading="lazy" src={loader} alt="loader" className="w-32 h-32 object-contain" />
    <h1 className="font-bold text-lg text-white mt-3">
      {title || 'Loading...'}
    </h1>
  </div>
);

export default Loader;
