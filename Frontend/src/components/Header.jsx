import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import '../App.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [servicesTimeout, setServicesTimeout] = useState(null);
  const [shopTimeout, setShopTimeout] = useState(null);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileShopOpen, setIsMobileShopOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);
  const openSignup = () => setIsSignupOpen(true);
  const closeSignup = () => setIsSignupOpen(false);

  const handleServicesMouseEnter = () => {
    clearTimeout(servicesTimeout);
    setIsServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    setServicesTimeout(setTimeout(() => setIsServicesDropdownOpen(false), 200));
  };

  const handleShopMouseEnter = () => {
    clearTimeout(shopTimeout);
    setIsShopDropdownOpen(true);
  };

  const handleShopMouseLeave = () => {
    setShopTimeout(setTimeout(() => setIsShopDropdownOpen(false), 200));
  };

  const toggleMobileServices = () => setIsMobileServicesOpen(!isMobileServicesOpen);
  const toggleMobileShop = () => setIsMobileShopOpen(!isMobileShopOpen);

  return (
    <header className="absolute top-0 left-0 bg-transparent py-6 lg:px-8 text-white w-full z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <NavLink to="/" className="font-young-serif">Landsarck</NavLink>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center text-lg space-x-8 font-bitter">
          <nav className="hidden lg:flex space-x-6">
            <NavLink to="/">Home</NavLink>

            {/* Services Dropdown for Desktop */}
            <div
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button className="hover:text-gray-300">Services</button>
              <div className={`dropdown-menu ${isServicesDropdownOpen ? 'show' : ''}`}>
                <NavLink to="/terrace-garden" className="block px-4 py-2">Terrace Garden</NavLink>
                <NavLink to="/landscape-architect" className="block px-4 py-2">Landscape Architect & Designer</NavLink>
                <NavLink to="/horticulturist" className="block px-4 py-2">Horticulturist</NavLink>
                <NavLink to="/agriculture-expert" className="block px-4 py-2">Agriculture Expert</NavLink>
                <NavLink to="/garden-maintenance" className="block px-4 py-2">Garden Maintenance</NavLink>
                <NavLink to="/irrigation-specialist" className="block px-4 py-2">Irrigation Specialist & Installation</NavLink>
                <NavLink to="/waterproofing-expert" className="block px-4 py-2">Water Proofing Expert</NavLink>
                <NavLink to="/landscape-contractor" className="block px-4 py-2">Landscape Contractor</NavLink>
                <NavLink to="/pool-technician" className="block px-4 py-2">Swimming Pool Service Technician</NavLink>
              </div>
            </div>

            {/* Shop Dropdown for Desktop */}
            <div
              className="relative"
              onMouseEnter={handleShopMouseEnter}
              onMouseLeave={handleShopMouseLeave}
            >
              <button className="hover:text-gray-300">Shop</button>
              <div className={`dropdown-menu ${isShopDropdownOpen ? 'show' : ''}`}>
                <NavLink to="/tree" className="block px-4 py-2">Tree</NavLink>
                <NavLink to="/plants" className="block px-4 py-2">Plants</NavLink>
                <NavLink to="/ground-covers" className="block px-4 py-2">Ground Covers</NavLink>
                <NavLink to="/creeper" className="block px-4 py-2">Creeper</NavLink>
                <NavLink to="/seeds" className="block px-4 py-2">Seeds</NavLink>
                <NavLink to="/pots-planter" className="block px-4 py-2">Pots & Planter</NavLink>
                <NavLink to="/garden-lights" className="block px-4 py-2">Garden Lights</NavLink>
                <NavLink to="/outdoor-furniture" className="block px-4 py-2">Outdoor Furniture</NavLink>
                <NavLink to="/fire-features" className="block px-4 py-2">Fire Features</NavLink>
                <NavLink to="/garden-ornament" className="block px-4 py-2">Garden Ornament</NavLink>
                <NavLink to="/stone-tile" className="block px-4 py-2">Stone & Tile</NavLink>
                <NavLink to="/soil-fertilizer" className="block px-4 py-2">Soil & Fertilizer</NavLink>
              </div>
            </div>

            {/* Additional Links */}
            <NavLink to="/courses">Course</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          {/* Cart and Auth Buttons */}
          <NavLink to="/cart">Cart (0)</NavLink>
          <button onClick={openLogin} className="hidden lg:inline px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition-all">
            SIGN IN
          </button>
          <button onClick={openSignup} className="hidden lg:inline px-4 py-2 border text-black bg-white rounded-lg hover:bg-transparent border-white hover:text-white transition-all">
            SIGN UP
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden flex items-center justify-center text-3xl" onClick={toggleMenu}>
          {isMenuOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-white h-full text-black text-xl px-6 py-8 space-y-6 font-bitter">
          <NavLink to="/" className="block" onClick={toggleMenu}>Home</NavLink>
          <div>
            <button onClick={toggleMobileServices} className="block w-full text-left">Services</button>
            <div className={`mobile-dropdown ${isMobileServicesOpen ? 'open' : ''}`}>
              <NavLink to="/terrace-garden" className="block px-4 py-2">Terrace Garden</NavLink>
              <NavLink to="/landscape-architect" className="block px-4 py-2">Landscape Architect & Designer</NavLink>
              <NavLink to="/horticulturist" className="block px-4 py-2">Horticulturist</NavLink>
              <NavLink to="/agriculture-expert" className="block px-4 py-2">Agriculture Expert</NavLink>
              <NavLink to="/garden-maintenance" className="block px-4 py-2">Garden Maintenance</NavLink>
              <NavLink to="/irrigation-specialist" className="block px-4 py-2">Irrigation Specialist & Installation</NavLink>
              <NavLink to="/waterproofing-expert" className="block px-4 py-2">Water Proofing Expert</NavLink>
              <NavLink to="/landscape-contractor" className="block px-4 py-2">Landscape Contractor</NavLink>
              <NavLink to="/pool-technician" className="block px-4 py-2">Swimming Pool Service Technician</NavLink>
            </div>
          </div>
          <div>
            <button onClick={toggleMobileShop} className="block w-full text-left">Shop</button>
            <div className={`mobile-dropdown ${isMobileShopOpen ? 'open' : ''}`}>
              <NavLink to="/tree" className="block px-4 py-2">Tree</NavLink>
              <NavLink to="/plants" className="block px-4 py-2">Plants</NavLink>
              <NavLink to="/ground-covers" className="block px-4 py-2">Ground Covers</NavLink>
              <NavLink to="/creeper" className="block px-4 py-2">Creeper</NavLink>
              <NavLink to="/seeds" className="block px-4 py-2">Seeds</NavLink>
              <NavLink to="/pots-planter" className="block px-4 py-2">Pots & Planter</NavLink>
              <NavLink to="/garden-lights" className="block px-4 py-2">Garden Lights</NavLink>
              <NavLink to="/outdoor-furniture" className="block px-4 py-2">Outdoor Furniture</NavLink>
              <NavLink to="/fire-features" className="block px-4 py-2">Fire Features</NavLink>
              <NavLink to="/garden-ornament" className="block px-4 py-2">Garden Ornament</NavLink>
              <NavLink to="/stone-tile" className="block px-4 py-2">Stone & Tile</NavLink>
              <NavLink to="/soil-fertilizer" className="block px-4 py-2">Soil & Fertilizer</NavLink>
            </div>
          </div>
          <NavLink to="/courses" className="block" onClick={toggleMenu}>Course</NavLink>
          <NavLink to="/about" className="block" onClick={toggleMenu}>About</NavLink>
          <NavLink to="/contact" className="block" onClick={toggleMenu}>Contact</NavLink>
          <button onClick={openLogin} className="block w-full text-center py-2 border border-black rounded-lg hover:bg-black hover:text-white transition-all">SIGN IN</button>
          <button onClick={openSignup} className="block w-full text-center py-2 border border-black bg-black text-white rounded-lg hover:bg-white hover:text-black transition-all">SIGN UP</button>
        </nav>
      )}

      {/* Login Modal */}
      {isLoginOpen && <Login closeModal={closeLogin} />}
      {/* Signup Modal */}
      {isSignupOpen && <SignUp closeModal={closeSignup} />}
    </header>
  );
};

export default Header;
