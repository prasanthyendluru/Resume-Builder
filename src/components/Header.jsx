import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const { user, logout } = React.useContext(AuthContext); // Access user and logout function from context
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route

  // Check if the current route is the Landing Page
  const isLandingPage = location.pathname === "/";

  // Smooth Scroll Function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="relative bg-cover bg-center bg-no-repeat py-4 px-6 top-0 z-50"
      style={{
        backgroundImage:
          "url('/pic5.jpg')", // Replace with your preferred image URL
        backgroundAttachment: "fixed", // Creates the scrolling effect
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* Content */}
      <nav className="container mx-auto flex justify-between items-center relative z-10">
        {/* Logo */}
        <h1
          className="text-xl font-bold text-white cursor-pointer"
          onClick={() => navigate("/")}
        >
          Resume Builder
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-4 items-center">
          {/* Always show the Home link */}
          <li>
            <span
              className="hover:text-gray-300 text-white cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </span>
          </li>

          {/* Show other links only on the landing page */}
          {isLandingPage && (
            <>
              <li>
                <span
                  className="hover:text-gray-300 text-white cursor-pointer"
                  onClick={() => scrollToSection("features")}
                >
                  Features
                </span>
              </li>
              <li>
                <span
                  className="hover:text-gray-300 text-white cursor-pointer"
                  onClick={() => scrollToSection("testimonials")}
                >
                  Testimonials
                </span>
              </li>
              <li>
                <span
                  className="hover:text-gray-300 text-white cursor-pointer"
                  onClick={() => scrollToSection("faqs")}
                >
                  FAQs
                </span>
              </li>
              <li>
                <span
                  className="hover:text-gray-300 text-white cursor-pointer"
                  onClick={() => scrollToSection("contact-us")}
                >
                  Contact Us
                </span>
              </li>
            </>
          )}

          {/* Login/Logout Buttons */}
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="font-semibold text-white">{user.name || "User"}</span>
              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
              >
                Signup
              </button>
            </>
          )}
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-0 bg-white text-black p-4 rounded shadow-lg w-48">
            <ul className="space-y-2">
              {/* Always show the Home link */}
              <li>
                <span
                  className="block hover:text-blue-600 cursor-pointer"
                  onClick={() => {
                    navigate("/");
                    setIsMenuOpen(false);
                  }}
                >
                  Home
                </span>
              </li>

              {/* Show other links only on the landing page */}
              {isLandingPage && (
                <>
                  <li>
                    <span
                      className="block hover:text-blue-600 cursor-pointer"
                      onClick={() => {
                        scrollToSection("features");
                        setIsMenuOpen(false);
                      }}
                    >
                      Features
                    </span>
                  </li>
                  <li>
                    <span
                      className="block hover:text-blue-600 cursor-pointer"
                      onClick={() => {
                        scrollToSection("testimonials");
                        setIsMenuOpen(false);
                      }}
                    >
                      Testimonials
                    </span>
                  </li>
                  <li>
                    <span
                      className="block hover:text-blue-600 cursor-pointer"
                      onClick={() => {
                        scrollToSection("faqs");
                        setIsMenuOpen(false);
                      }}
                    >
                      FAQs
                    </span>
                  </li>
                  <li>
                    <span
                      className="block hover:text-blue-600 cursor-pointer"
                      onClick={() => {
                        scrollToSection("contact-us");
                        setIsMenuOpen(false);
                      }}
                    >
                      Contact Us
                    </span>
                  </li>
                </>
              )}

              {/* Login/Logout Buttons for Mobile */}
              {user ? (
                <>
                  <li>
                    <span className="font-semibold block">{user.name || "User"}</span>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        logout();
                        setIsMenuOpen(false); // Close menu after logout
                      }}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 w-full"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <button
                      onClick={() => {
                        navigate("/login");
                        setIsMenuOpen(false); // Close menu after navigation
                      }}
                      className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300 w-full"
                    >
                      Login
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        navigate("/signup");
                        setIsMenuOpen(false); // Close menu after navigation
                      }}
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 w-full"
                    >
                      Signup
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;