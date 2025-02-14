import React from "react";

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
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
        <h2 className="text-3xl font-bold text-white mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="testimonial-item p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
            <p className="text-gray-600 italic">
              "This tool helped me create a resume that landed me my dream job!"
            </p>
            <p className="text-gray-800 font-semibold mt-4">- John Doe</p>
          </div>
          <div className="testimonial-item p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
            <p className="text-gray-600 italic">
              "The AI suggestions were spot-on and saved me so much time."
            </p>
            <p className="text-gray-800 font-semibold mt-4">- Jane Smith</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;