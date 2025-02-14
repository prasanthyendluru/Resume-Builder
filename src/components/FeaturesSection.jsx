import React from "react";

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="relative py-12 px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
        "url('/pic5.jpg')", // Replace with your preferred image URL
        backgroundAttachment: "fixed", // Creates the scrolling effect
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold text-white mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-item p-6 bg-gray-50 bg-opacity-80 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              AI-Powered Suggestions
            </h3>
            <p className="text-gray-600">
              Get tailored suggestions for your resume based on industry trends.
            </p>
          </div>
          <div className="feature-item p-6 bg-gray-50 bg-opacity-80 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Multiple Templates
            </h3>
            <p className="text-gray-600">
              Choose from a variety of professionally designed templates.
            </p>
          </div>
          <div className="feature-item p-6 bg-gray-50 bg-opacity-80 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              ATS-Friendly Resumes
            </h3>
            <p className="text-gray-600">
              Ensure your resume passes through Applicant Tracking Systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;