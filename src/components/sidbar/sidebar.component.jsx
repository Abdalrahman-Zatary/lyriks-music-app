import { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';

import NavLinks from '../nav-links/nav-links.component';
import logo from '../../assets/logo.svg';

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[175px] py-10 px-2.5 bg-gradient-to-tl from-white/20 to-[#191624]/50 backdrop-blur-md ">
        <img
          loading="lazy"
          src={logo}
          alt="logo"
          className="w-full h-14 object-contain"
        />
        <NavLinks />
      </div>

      <div className="absolute md:hidden block top-4 right-2">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="w-5 h-5 text-white mr-2 cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-5 h-5 text-white mr-2 cursor-pointer"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-1/2 bg-gradient-to-tl from-white/10 to-[#191624]/50 backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}
      >
        <img
          loading="lazy"
          src={logo}
          alt="logo"
          className="w-full h-14 object-contain"
        />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
