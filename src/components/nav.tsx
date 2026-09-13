import { HiMenu } from 'react-icons/hi';
import logoText from '../assets/logo-text.png';

const Nav = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between ">
        
       
        <div className="hamburger md:hidden flex items-center">
          <button 
            type="button" 
            className="text-[#0088ff] hover:opacity-80 p-1 transition-opacity focus:outline-none"
            aria-label="Toggle menu"
          >
            <HiMenu className="w-8 h-8" />
          </button>
        </div>

        
        <div className="img_div flex items-center justify-center md:justify-start">
          <div className="img flex items-center">
            <a href="#">
              <img 
                src={logoText} 
                alt="Logo" 
                className="h-6 sm:h-10 w-auto object-contain"
              />
            </a>
          </div>
        </div>

       
        <div className="nav_link hidden md:block">
          <ul className="flex items-center space-x-8 text-sm font-medium">
            <li>
              <a href="#" className="text-slate-600 hover:text-[#e91e63] transition-colors duration-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-600 hover:text-[#e91e63] transition-colors duration-200">
                Technologies
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-600 hover:text-[#e91e63] transition-colors duration-200">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-600 hover:text-[#e91e63] transition-colors duration-200">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-600 hover:text-[#e91e63] transition-colors duration-200">
                Contact
              </a>
            </li>
          </ul>
        </div>

     
        <div className="nav_btn flex items-center space-x-3 sm:space-x-5">
          <button className="text-xs sm:text-sm font-medium text-slate-700 cursor-pointer  hover:text-[#e91e63] transition-colors duration-200">
            Sign In
          </button>
          <button className="px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm cursor-pointer font-medium text-white bg-[#e91e63] hover:bg-[#d81b60] rounded-full transition-all duration-200 shadow-sm active:scale-95 whitespace-nowrap">
            Sign Up
          </button>
        </div>

      </nav>
    </header>
  );
};

export default Nav;