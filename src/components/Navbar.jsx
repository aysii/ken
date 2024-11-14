import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
   const [nav, setNav] = useState(false);
   const handleNav = () => setNav(!nav);

   return (
       <nav className="flex justify-center items-center bg-gradient-to-r from-blue-900 to-blue-500 p-4 shadow-md">
           {/* Desktop Links */}
           <div className="hidden md:flex space-x-8 text-white text-lg">
               <NavLink 
                   to="/" 
                   className={({ isActive }) => 
                       isActive ? 'text-blue-300 font-semibold' : 'hover:text-blue-300 transition duration-200'
                   }
               >
                   Home
               </NavLink>
               <NavLink 
                   to="/about" 
                   className={({ isActive }) => 
                       isActive ? 'text-blue-300 font-semibold' : 'hover:text-blue-300 transition duration-200'
                   }
               >
                   About
               </NavLink>
               <NavLink 
                   to="/portfolio" 
                   className={({ isActive }) => 
                       isActive ? 'text-blue-300 font-semibold' : 'hover:text-blue-300 transition duration-200'
                   }
               >
                   Portfolio
               </NavLink>
               <NavLink 
                   to="/contact" 
                   className={({ isActive }) => 
                       isActive ? 'text-blue-300 font-semibold' : 'hover:text-blue-300 transition duration-200'
                   }
               >
                   Contact
               </NavLink>
           </div>
           {/* Mobile Menu Button */}
           <div className="md:hidden" onClick={handleNav}>
               <button className="text-white">Menu</button>
           </div>
           {/* Mobile Menu */}
           {nav && (
               <div className="absolute top-0 left-0 w-full h-screen bg-blue-600 flex flex-col items-center justify-center space-y-8 md:hidden">
                   <NavLink onClick={handleNav} to="/" className="text-2xl text-white hover:text-blue-300">Home</NavLink>
                   <NavLink onClick={handleNav} to="/about" className="text-2xl text-white hover:text-blue-300">About</NavLink>
                   <NavLink onClick={handleNav} to="/portfolio" className="text-2xl text-white hover:text-blue-300">Portfolio</NavLink>
                   <NavLink onClick={handleNav} to="/contact" className="text-2xl text-white hover:text-blue-300">Contact</NavLink>
               </div>
           )}
       </nav>
   );
}

export default Navbar;
