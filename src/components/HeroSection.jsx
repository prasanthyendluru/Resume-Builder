import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle button click
  const handleGetStartedClick = () => {
    navigate("/login"); // Redirect to the login page
  };

  return (
    <section
      id="hero"
      className="relative bg-cover bg-center bg-no-repeat py-12 px-4 md:px-8 lg:px-16 text-center"
      style={{
        backgroundImage:
          "url('/pic5.jpg')", // Replace with your preferred image URL
        backgroundAttachment: "fixed", // Creates the scrolling effect
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Build Your Perfect Resume in Minutes
        </h1>
        <p className="text-gray-300 mb-8">
          Create professional resumes with our AI-powered resume builder.
        </p>
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={handleGetStartedClick} // Attach the click handler
        >
          Get started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;