import { NavLink } from 'react-router-dom';

import { links } from '../../assets/constants';

const NavLinks = ({ handleClick }) => (
  <div className="mt-8">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-7 text-xs font-medium text-gray-400 hover:text-cyan-400"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-5 h-5 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

export default NavLinks;
