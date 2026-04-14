import { useDispatch, useSelector } from 'react-redux';

import { setIsMobileMenuOpen } from '../../redux/features/mobileSlice';
import NavLinks from '../nav-links/nav-links.component';
import logo from '../../assets/logo.svg';

const Sidebar = () => {
  const dispatch = useDispatch();
  const { isMobileMenuOpen } = useSelector((state) => state.mobile);

  const handleClick = () => {
    dispatch(setIsMobileMenuOpen(false));
  };

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

      <div
        className={`absolute top-0 h-screen w-1/2 bg-gradient-to-tl from-white/10 to-[#191624]/50 backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${isMobileMenuOpen ? 'left-0' : '-left-full'}`}
      >
        <img
          loading="lazy"
          src={logo}
          alt="logo"
          className="w-full h-14 object-contain"
        />
        <NavLinks handleClick={handleClick} />
      </div>
    </>
  );
};

export default Sidebar;
