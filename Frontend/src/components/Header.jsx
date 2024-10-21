import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import "../App.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);
  const [isAddMoreDropdownOpen, setIsAddMoreDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileShopOpen, setIsMobileShopOpen] = useState(false);
  const [isMobileCourseOpen, setIsMobileCourseOpen] = useState(false);
  const [isMobileAddMoreOpen, setIsMobileAddMoreOpen] = useState(false);
  const [headerClass, setHeaderClass] = useState("bg-transparent text-white");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);
  const openSignup = () => setIsSignupOpen(true);
  const closeSignup = () => setIsSignupOpen(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHeaderClass("bg-white text-black border-black");
    } else {
      setHeaderClass("bg-transparent text-white");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 py-6 lg:px-8 w-full z-50 ${headerClass}`}
    >
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <NavLink to="/" className="font-young-serif">
            Landsarck
          </NavLink>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center text-lg space-x-8 font-bitter">
          <nav className="hidden lg:flex space-x-6">
            <NavLink to="/">Home</NavLink>

<div
  className="relative"
  onMouseEnter={() => setIsServicesDropdownOpen(true)}
  onMouseLeave={() => setIsServicesDropdownOpen(false)}
>
  <button className="hover:text-gray-300">Services</button>
  <div
    className={`dropdown-menu w-[30rem]  ${isServicesDropdownOpen ? "show" : ""}`}
  >
    <div className="grid grid-cols-2 gap-2"> {/* Two-column grid */}
      <NavLink to="/terrace-garden" className="block px-4 py-2">
        Terrace Garden
      </NavLink>
      <NavLink to="/landscape-architect" className="block px-4 py-2">
        Landscape Architect & Designer
      </NavLink>
      <NavLink to="/horticulturist" className="block px-4 py-2">
        Horticulturist
      </NavLink>
      <NavLink to="/agriculture-expert" className="block px-4 py-2">
        Agriculture Expert
      </NavLink>
      <NavLink to="/garden-maintenance" className="block px-4 py-2">
        Garden Maintenance
      </NavLink>
      <NavLink
        to="/irrigation-specialist"
        className="block px-4 py-2"
      >
        Irrigation Specialist & Installation
      </NavLink>
      <NavLink to="/waterproofing-expert" className="block px-4 py-2">
        Water Proofing Expert
      </NavLink>
      <NavLink to="/landscape-contractor" className="block px-4 py-2">
        Landscape Contractor
      </NavLink>
      <NavLink to="/pool-technician" className="block px-4 py-2">
        Swimming Pool Service Technician
      </NavLink>
    </div>
  </div>
</div>


<div
  className="relative"
  onMouseEnter={() => setIsShopDropdownOpen(true)}
  onMouseLeave={() => setIsShopDropdownOpen(false)}
>
  <button className="hover:text-gray-300">Shop</button>
  <div
    className={`dropdown-menu w-[22rem] ${isShopDropdownOpen ? "show" : ""}`}
  >
    <div className="grid grid-cols-2 gap-2"> {/* Two-column grid */}
      <NavLink to="/tree" className="block px-4 py-2">
        Tree
      </NavLink>
      <NavLink to="/plants" className="block px-4 py-2">
        Plants
      </NavLink>
      <NavLink to="/ground-covers" className="block px-4 py-2">
        Ground Covers
      </NavLink>
      <NavLink to="/creeper" className="block px-4 py-2">
        Creeper
      </NavLink>
      <NavLink to="/seeds" className="block px-4 py-2">
        Seeds
      </NavLink>
      <NavLink to="/pots-planter" className="block px-4 py-2">
        Pots & Planter
      </NavLink>
      <NavLink to="/garden-lights" className="block px-4 py-2">
        Garden Lights
      </NavLink>
      <NavLink to="/outdoor-furniture" className="block px-4 py-2">
        Outdoor Furniture
      </NavLink>
      <NavLink to="/fire-features" className="block px-4 py-2">
        Fire Features
      </NavLink>
      <NavLink to="/garden-ornament" className="block px-4 py-2">
        Garden Ornament
      </NavLink>
      <NavLink to="/stone-tile" className="block px-4 py-2">
        Stone & Tile
      </NavLink>
      <NavLink to="/soil-fertilizer" className="block px-4 py-2">
        Soil & Fertilizer
      </NavLink>
    </div>
  </div>
</div>


            {/* Course Dropdown for Desktop */}
            <div
              className="relative"
              onMouseEnter={() => setIsCourseDropdownOpen(true)}
              onMouseLeave={() => setIsCourseDropdownOpen(false)}
            >
              <button className="hover:text-gray-300">Course</button>
              <div
                className={`dropdown-menu w-52 ${
                  isCourseDropdownOpen ? "show" : ""
                }`}
              >
                <NavLink to="/diploma-horticulture" className="block px-4 py-2">
                  Diploma in Horticulture
                </NavLink>
                <NavLink to="/diploma-agriculture" className="block px-4 py-2">
                  Diploma in Agriculture
                </NavLink>
                <NavLink to="/diploma-landscape" className="block px-4 py-2">
                  Diploma in Landscape & Garden Design
                </NavLink>
                <NavLink
                  to="/certificate-terrace-garden"
                  className="block px-4 py-2"
                >
                  Certificate in Terrace Garden
                </NavLink>
              </div>
            </div>

            {/* Add More Dropdown for Desktop */}
            <div
              className="relative"
              onMouseEnter={() => setIsAddMoreDropdownOpen(true)}
              onMouseLeave={() => setIsAddMoreDropdownOpen(false)}
            >
              <button className="hover:text-gray-300">Add More</button>
              <div
                className={`dropdown-menu ${
                  isAddMoreDropdownOpen ? "show" : ""
                }`}
              >
                <NavLink to="/about" className="block px-4 py-2">
                  About
                </NavLink>
                <NavLink to="/contact" className="block px-4 py-2">
                  Contact
                </NavLink>
              </div>
            </div>
          </nav>

          {/* Cart and Auth Buttons */}
          <NavLink to="/cart">Cart (0)</NavLink>
          <button
            onClick={openLogin}
            className={`hidden lg:inline px-4 py-2 border rounded-lg transition-all ${
              headerClass === "bg-white text-black border-black"
                ? "border-black bg-white text-black hover:bg-black hover:text-white transition-all ease-in-out duration-300"
                : "border-white bg-transparent text-white hover:bg-white hover:text-black"
            }`}
          >
            SIGN IN
          </button>
          <button
            onClick={openSignup}
            className={`hidden lg:inline px-4 py-2 border rounded-lg transition-all ${
              headerClass === "bg-white text-black border-black"
                ? "border text-white bg-black hover:border-black hover:bg-transparent hover:text-black transition-all ease-in-out duration-300"
                : "border-white text-black bg-white hover:bg-transparent hover:text-white "
            }`}
          >
            SIGN UP
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center justify-center text-3xl"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-white h-screen text-black text-xl px-6 py-8 space-y-6 font-bitter">
          <NavLink to="/" className="block" onClick={toggleMenu}>
            Home
          </NavLink>
          <div>
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="w-full text-left"
            >
              Services
            </button>
            {isMobileServicesOpen && (
              <div className="ml-4 space-y-5 p-3 bg-gray-50">
                <NavLink to="/terrace-garden" className="block ">
                  Terrace Garden
                </NavLink>
                <NavLink to="/landscape-architect" className="block ">
                  Landscape Architect & Designer
                </NavLink>
                <NavLink to="/horticulturist" className="block ">
                  Horticulturist
                </NavLink>
                <NavLink to="/agriculture-expert" className="block ">
                  Agriculture Expert
                </NavLink>
                <NavLink to="/garden-maintenance" className="block">
                  Garden Maintenance
                </NavLink>
                <NavLink to="/irrigation-specialist" className="block ">
                  Irrigation Specialist & Installation
                </NavLink>
                <NavLink to="/waterproofing-expert" className="block ">
                  Water Proofing Expert
                </NavLink>
                <NavLink to="/landscape-contractor" className="block ">
                  Landscape Contractor
                </NavLink>
                <NavLink to="/pool-technician" className="block ">
                  Swimming Pool Service Technician
                </NavLink>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={() => setIsMobileShopOpen(!isMobileShopOpen)}
              className="w-full text-left"
            >
              Shop
            </button>
            {isMobileShopOpen && (
              <div className="ml-4  space-y-5 p-3 bg-gray-50">
                <NavLink to="/tree" className="block">
                  Tree
                </NavLink>
                <NavLink to="/plants" className="block">
                  Plants
                </NavLink>
                <NavLink to="/ground-covers" className="block">
                  Ground Covers
                </NavLink>
                <NavLink to="/creeper" className="block">
                  Creeper
                </NavLink>
                <NavLink to="/seeds" className="block">
                  Seeds
                </NavLink>
                <NavLink to="/pots-planter" className="block">
                  Pots & Planter
                </NavLink>
                <NavLink to="/garden-lights" className="block">
                  Garden Lights
                </NavLink>
                <NavLink to="/outdoor-furniture" className="block">
                  Outdoor Furniture
                </NavLink>
                <NavLink to="/fire-features" className="block">
                  Fire Features
                </NavLink>
                <NavLink to="/garden-ornament" className="block">
                  Garden Ornament
                </NavLink>
                <NavLink to="/stone-tile" className="block">
                  Stone & Tile
                </NavLink>
                <NavLink to="/soil-fertilizer" className="block">
                  Soil & Fertilizer
                </NavLink>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={() => setIsMobileCourseOpen(!isMobileCourseOpen)}
              className="w-full text-left"
            >
              Course
            </button>
            {isMobileCourseOpen && (
              <div className="ml-4  space-y-5 p-3 bg-gray-50">
                <NavLink to="/diploma-horticulture" className="block">
                  Diploma in Horticulture
                </NavLink>
                <NavLink to="/diploma-agriculture" className="block">
                  Diploma in Agriculture
                </NavLink>
                <NavLink to="/diploma-landscape" className="block">
                  Diploma in Landscape & Garden Design
                </NavLink>
                <NavLink to="/certificate-terrace-garden" className="block">
                  Certificate in Terrace Garden
                </NavLink>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={() => setIsMobileAddMoreOpen(!isMobileAddMoreOpen)}
              className="w-full text-left"
            >
              Add More
            </button>
            {isMobileAddMoreOpen && (
              <div className="ml-4  space-y-5 p-3 bg-gray-50">
                <NavLink to="/about" className="block">
                  About
                </NavLink>
                <NavLink to="/contact" className="block">
                  Contact
                </NavLink>
              </div>
            )}
          </div>

          <button
            onClick={openLogin}
            className="block w-full px-4 py-2 border border-black rounded-lg"
          >
            SIGN IN
          </button>
          <button
            onClick={openSignup}
            className="block w-full px-4 py-3 border text-white bg-black rounded-lg"
          >
            SIGN UP
          </button>
        </nav>
      )}

      {/* Login and Signup Popups */}
      {isLoginOpen && <Login closeLogin={closeLogin} />}
      {isSignupOpen && <SignUp closeSignup={closeSignup} />}
    </header>
  );
};

export default Header;
