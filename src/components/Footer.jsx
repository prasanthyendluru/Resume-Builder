import React from "react";

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat py-12 text-white overflow-hidden"
      style={{
        backgroundImage:
          "url('/pic5.jpg')", // Replace with your preferred image URL
        backgroundAttachment: "fixed", // Creates the scrolling effect
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 px-4">
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.instagram.com/prashanth_yendluru/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition duration-300"
          >
            <i className="fab fa-instagram text-2xl"></i> {/* Font Awesome Icon */}
          </a>
          <a
            href="https://www.linkedin.com/in/penchala-prasanth-yendluru-991840317/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            <i className="fab fa-linkedin-in text-2xl"></i> {/* Font Awesome Icon */}
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <i className="fab fa-twitter text-2xl"></i> {/* Font Awesome Icon */}
          </a>
          <a
            href="https://github.com/prasanthyendluru"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <i className="fab fa-github text-2xl"></i> {/* Font Awesome Icon */}
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-lg font-semibold text-center mb-2">
          &copy; 2023 AI Resume Builder. All rights reserved.
        </p>
        <p className="text-center">
          Built with ❤️ by{" "}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Prasanth Yendluru
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;