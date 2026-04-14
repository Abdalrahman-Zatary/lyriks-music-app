import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { HiOutlineMenu } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';
import { FiSearch } from 'react-icons/fi';

import { setIsMobileMenuOpen } from '../../redux/features/mobileSlice';

const Searchbar = () => {
  const dispatch = useDispatch();
  const { isMobileMenuOpen } = useSelector((state) => state.mobile);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  return (
    <div className="xl:h-10 h-12 relative w-full flex justify-between items-center md:px-4 px-8">
      <form
        onSubmit={handleSubmit}
        autoCapitalize="off"
        className="md:flex-1 flex items-center border border-white/20 focus-within:border-white/60 rounded-xl bg-white/10 backdrop-blur-lg text-gray-100 focus-within:text-gray-300 transition-all"
      >
        <label htmlFor="search-field" className="sr-only">
          Search all songs
        </label>
        <div className="flex flex-row justify-start items-center">
          <FiSearch className="w-5 h-5 sm:mr-3 mr-2" />
          <input
            name="search-field"
            autoComplete="off"
            id="search-field"
            placeholder="Search"
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 md:h-auto h-6 bg-transparent border-none outline-none placeholder-gray-100 focus-within:placeholder-gray-300 md:text-lg text-sm text-left transition-all"
          />
        </div>
      </form>

      <div className="md:hidden flex items-center">
        {isMobileMenuOpen ? (
          <RiCloseLine
            className="w-5 h-5 text-white cursor-pointer"
            onClick={() => dispatch(setIsMobileMenuOpen(false))}
          />
        ) : (
          <HiOutlineMenu
            className="w-5 h-5 text-white cursor-pointer"
            onClick={() => dispatch(setIsMobileMenuOpen(true))}
          />
        )}
      </div>
    </div>
  );
};

export default Searchbar;
