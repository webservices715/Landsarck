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
    setHeaderClass("bg-white text-black border-black");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 pt-6 pb-2 lg:px-8 w-full z-50 ${headerClass}`}
    >
      <div className="flex justify-between  px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <NavLink to="/" className="font-young-serif">
            Landsarck
          </NavLink>
        </div>

        {/* Navigation Links */}
        <div className="flex  text-lg space-x-8 font-bitter">
          <nav className="hidden lg:flex space-x-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <div
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button className="hover:text-gray-300">Services</button>
              <div
                className={`dropdown-menu w-[28rem] ${
                  isServicesDropdownOpen ? "show" : ""
                }`}
              >
                <div className="grid grid-cols-2 gap-2 items-center">
                  {" "}
                  {/* Two-column grid */}
                  <NavLink to="/" className="block px-4 py-2">
                    Terrace Garden
                  </NavLink>
                  <NavLink to="/" className="block px-4 py-2">
                    Landscape Architect & Designer
                  </NavLink>
                  <NavLink to="/" className="block px-4 py-2">
                    Horticulturist
                  </NavLink>
                  <NavLink to="/" className="block px-4 py-2">
                    Agriculture Expert
                  </NavLink>
                  <NavLink to="/" className="block px-4 py-2">
                    Garden Maintenance
                  </NavLink>
                  <NavLink to="/" className="block px-4 py-2">
                    Irrigation Specialist & Installation
                  </NavLink>
                  <NavLink to="/" className="block px-4 py-2">
                    Water Proofing Expert
                  </NavLink>
                  <NavLink to="/" className="block px-4 py-2">
                    Landscape Contractor
                  </NavLink>
                  <NavLink to="/" className="block px-4 py-2">
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
                className={`dropdown-menu w-[22rem] ${
                  isShopDropdownOpen ? "show" : ""
                }`}
              >
                <div className="grid grid-cols-2 gap-2 items-center">
                  {" "}
                  {/* Two-column grid */}
                  <NavLink to="/" className="block px-4 py-2">
                    Tree
                  </NavLink>
                  <NavLink to="/" className="block px-4 py-2">
                    Plants
                  </NavLink>
                  <NavLink to="/" className="block px-4 py-2">
                    Ground Covers
                  </NavLink>
                  <NavLink to="/" className="block px-4 py-2">
                    Creeper
                  </NavLink>
                  <NavLink to="/" className="block px-4 py-2">
                    Seeds
                  </NavLink>
                  <NavLink to="/" className="block px-4 py-2">
                    Pots & Planter
                  </NavLink>
                  <NavLink to="/" className="block px-4 py-2">
                    Garden Lights
                  </NavLink>
                  <NavLink to="/" className="block px-4 py-2">
                    Outdoor Furniture
                  </NavLink>
                  <NavLink to="/" className="block px-4 py-2">
                    Fire Features
                  </NavLink>
                  <NavLink to="/" className="block px-4 py-2">
                    Garden Ornament
                  </NavLink>
                  <NavLink to="/" className="block px-4 py-2">
                    Stone & Tile
                  </NavLink>
                  <NavLink to="/" className="block px-4 py-2">
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
                <NavLink to="/" className="block px-4 py-2">
                  Diploma in Horticulture
                </NavLink>
                <NavLink to="/" className="block px-4 py-2">
                  Diploma in Agriculture
                </NavLink>
                <NavLink to="/" className="block px-4 py-2">
                  Diploma in Landscape & Garden Design
                </NavLink>
                <NavLink to="/" className="block px-4 py-2">
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
              <button className="hover:text-gray-300">More</button>
              <div
                className={`dropdown-menu ${
                  isAddMoreDropdownOpen ? "show" : ""
                }`}
              >
                <NavLink to="/" className="block px-4 py-2">
                  About
                </NavLink>
                <NavLink to="/" className="block px-4 py-2">
                  Contact
                </NavLink>
              </div>
            </div>
          </nav>

          {/* Cart and Auth Buttons */}
          <NavLink to="/">Cart (0)</NavLink>
          {/* <button
            onClick={openLogin}
            className={`hidden lg:inline px-4 py-2 border rounded-lg transition-all ${
              headerClass === "bg-white text-black border-black"
                ? "border-black bg-white text-black hover:bg-black hover:text-white transition-all ease-in-out duration-300"
                : "border-white bg-transparent text-white hover:bg-white hover:text-black"
            }`}
          >
            SIGN IN
          </button> */}
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
          className="lg:hidden flex  justify-center text-3xl"
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
            <NavLink to="/blog">Blog</NavLink>
          </div>

          <div>
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="w-full text-left"
            >
              Services
            </button>
            {isMobileServicesOpen && (
              <div className="ml-4 space-y-5 p-3 bg-gray-50">
                <NavLink to="/" className="block ">
                  Terrace Garden
                </NavLink>
                <NavLink to="/" className="block ">
                  Landscape Architect & Designer
                </NavLink>
                <NavLink to="/" className="block ">
                  Horticulturist
                </NavLink>
                <NavLink to="/" className="block ">
                  Agriculture Expert
                </NavLink>
                <NavLink to="/" className="block">
                  Garden Maintenance
                </NavLink>
                <NavLink to="/" className="block ">
                  Irrigation Specialist & Installation
                </NavLink>
                <NavLink to="/" className="block ">
                  Water Proofing Expert
                </NavLink>
                <NavLink to="/" className="block ">
                  Landscape Contractor
                </NavLink>
                <NavLink to="/" className="block ">
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
                <NavLink to="/" className="block">
                  Tree
                </NavLink>
                <NavLink to="/" className="block">
                  Plants
                </NavLink>
                <NavLink to="/" className="block">
                  Ground Covers
                </NavLink>
                <NavLink to="/" className="block">
                  Creeper
                </NavLink>
                <NavLink to="/" className="block">
                  Seeds
                </NavLink>
                <NavLink to="/" className="block">
                  Pots & Planter
                </NavLink>
                <NavLink to="/" className="block">
                  Garden Lights
                </NavLink>
                <NavLink to="/" className="block">
                  Outdoor Furniture
                </NavLink>
                <NavLink to="/" className="block">
                  Fire Features
                </NavLink>
                <NavLink to="/" className="block">
                  Garden Ornament
                </NavLink>
                <NavLink to="/" className="block">
                  Stone & Tile
                </NavLink>
                <NavLink to="/" className="block">
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
                <NavLink to="/" className="block">
                  Diploma in Horticulture
                </NavLink>
                <NavLink to="/" className="block">
                  Diploma in Agriculture
                </NavLink>
                <NavLink to="/" className="block">
                  Diploma in Landscape & Garden Design
                </NavLink>
                <NavLink to="/" className="block">
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
              More
            </button>
            {isMobileAddMoreOpen && (
              <div className="ml-4  space-y-5 p-3 bg-gray-50">
                <NavLink to="/" className="block">
                  About
                </NavLink>
                <NavLink to="/" className="block">
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
