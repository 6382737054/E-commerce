import React, { useState } from 'react';
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ heroRef, companyName = "Thurigai" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(0);
  };

  const scrollToHero = () => {
    if (heroRef && heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToHome = () => {
    navigate('/');
    setTimeout(() => {
      scrollToHero();
    }, 300);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center -ml-6"> {/* Adjusting negative margin to move logo left */}
            <img
              src={`${process.env.PUBLIC_URL}/Images/ThurigaiLogo.png`}
              alt="Thurigai Logo"
              className="w-20 h-26" // Further increased width and height
            />
            {/* Company Name */}
            <div className="ml-1 mt-2"> {/* Adjust margin-left and margin-top to position title */}
              <h1 className="text-xl font-semibold text-gray-500"> {/* Silver-grey color */}
                {companyName}
              </h1>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            {['Home', 'Products', 'About Us', 'Our Community'].map((item, index) => (
              <div
                className="relative group"
                key={item}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="text-black hover:text-gray-800 transition-colors duration-300 ease-in-out transform hover:scale-110"
                  onClick={item === 'Home' ? navigateToHome : () => navigate(`/${item.toLowerCase().replace(/\s/g, '')}`)}
                >
                  {item}
                </button>
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-black transform transition-transform duration-500 ease-out ${
                    activeIndex === index ? 'scale-x-100' : 'scale-x-0'
                  }`}
                ></span>
              </div>
            ))}
          </nav>

          <div className="hidden md:flex space-x-6 items-center">
            <button className="text-black hover:text-gray-800 flex items-center space-x-2">
              <ShoppingCartIcon className="w-6 h-6" />
              <span>Cart</span>
            </button>
            <button className="text-black hover:text-gray-800 flex items-center space-x-2">
              <UserIcon className="w-6 h-6" />
              <span>My Account</span>
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-black hover:text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white shadow-md transition-all ease-out duration-500">
          {['Home', 'Products', 'About Us', 'Our Community'].map((item) => (
            <button
              onClick={() => {
                if (item === 'Home') {
                  navigateToHome();
                } else {
                  navigate(`/${item.toLowerCase().replace(/\s/g, '')}`);
                }
                toggleMenu();
              }}
              key={item}
              className="block px-4 py-2 text-black hover:text-gray-800 hover:bg-blue-100 transition-colors duration-300"
            >
              {item}
            </button>
          ))}
          
          <div className="flex space-x-4 px-4 py-2">
            <button className="text-black hover:text-gray-800 flex items-center space-x-2">
              <ShoppingCartIcon className="w-6 h-6" />
              <span>Cart</span>
            </button>
            <button className="text-black hover:text-gray-800 flex items-center space-x-2">
              <UserIcon className="w-6 h-6" />
              <span>My Account</span>
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
