import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Login from './Login'; // Import Login component
import Signup from './Signup'; // Import Signup component

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false); // State to control signup popup

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openLogin = () => {
    setIsLoginOpen(true);
  };

  const closeLogin = () => {
    setIsLoginOpen(false);
  };

  const openSignup = () => {
    setIsSignupOpen(true);
  };

  const closeSignup = () => {
    setIsSignupOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 bg-transparent py-6 lg:px-8 text-white w-full z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <NavLink to="/" className="font-young-serif">Landsarck</NavLink>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex text-lg space-x-8 font-bitter">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/course">Course</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        {/* Cart and Login/Signup Buttons */}
        <div className="flex items-center text-lg space-x-4 font-bitter">
          <NavLink to="/cart">Cart (0)</NavLink>
          <button
            onClick={openLogin}
            className="hidden lg:inline px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition-all ease-in-out duration-500"
          >
            SIGN IN
          </button>
          <button
            onClick={openSignup}
            className="hidden lg:inline px-4 py-2 border text-black bg-white rounded-lg hover:bg-transparent border-white hover:text-white transition-all ease-in-out duration-500"
          >
            SIGN UP
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center justify-center text-3xl"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-white h-screen text-black text-xl px-6 py-8 space-y-6 font-bitter">
          <NavLink to="/" className="block" onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/services" className="block" onClick={toggleMenu}>Services</NavLink>
          <NavLink to="/shop" className="block" onClick={toggleMenu}>Shop</NavLink>
          <NavLink to="/course" className="block" onClick={toggleMenu}>Course</NavLink>
          <NavLink to="/about" className="block" onClick={toggleMenu}>About</NavLink>
          <NavLink to="/contact" className="block" onClick={toggleMenu}>Contact</NavLink>
          <button
            onClick={() => {
              toggleMenu();
              openLogin();
            }}
            className="block w-[60%] px-4 py-3 border border-black rounded hover:bg-black hover:text-white transition-all ease-in-out duration-500"
          >
            SIGN IN
          </button>
          <button
            onClick={() => {
              toggleMenu();
              openSignup();
            }}
            className="block w-[60%] px-4 py-3 border text-black bg-white rounded-lg hover:bg-transparent border-black hover:text-black transition-all ease-in-out duration-500"
          >
            SIGN UP
          </button>
        </nav>
      )}

      {/* Login Modal */}
      {isLoginOpen && <Login closeLogin={closeLogin} />}

      {/* Signup Modal */}
      {isSignupOpen && <Signup closeSignup={closeSignup} />}
    </header>
  );
};

export default Header;
