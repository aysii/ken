import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-[1500px] h-[8vh]">
      <div className="flex items-center justify-between h-16 lg:h-20 bg-[#223]/30 rounded-b-3xl shadow-lg px-4">

        <div className="text-white text-xl sm:text-2xl">
          <NavLink to="/" className="font-bold">
            <span>Ken</span>
          </NavLink>
        </div>

        <ul className="text-gray-700 font-medium hidden lg:flex lg:items-center lg:justify-center lg:space-x-10 text-2xl">
          <li className="p-2"><NavLink exact to="/" activeClassName="text-black">Home</NavLink></li>
          <li className="p-2"><NavLink to="/about" activeClassName="text-black">About</NavLink></li>
          <li className="p-2"><NavLink to="/portfolio" activeClassName="text-black">Portfolio</NavLink></li>
          <li className="p-2"><NavLink to="/contact" activeClassName="text-black">Contact</NavLink></li>
        </ul>

        <div onClick={handleNav} className="block lg:hidden text-white z-40">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div className={nav ? 'z-30 text-gray-300 fixed h-full w-full bg-[#202121] top-0 left-0 ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <h1 className="text-3xl text-gray-100 m-4">Ken</h1>
          <ul className="p-8 text-2xl text-center space-y-8">
            <li className="p-2"><NavLink exact to="/" activeClassName="text-black" onClick={handleNav}>Home</NavLink></li>
            <li className="p-2"><NavLink to="/about" activeClassName="text-black" onClick={handleNav}>About</NavLink></li>
            <li className="p-2"><NavLink to="/portfolio" activeClassName="text-black" onClick={handleNav}>Portfolio</NavLink></li>
            <li className="p-2"><NavLink to="/contact" activeClassName="text-black" onClick={handleNav}>Contact</NavLink></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
