import React from "react";

const ContactUs = () => {
  return (
    <section
      id="contact-us"
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
        <h2 className="text-3xl font-bold text-white mb-8">Contact Us</h2>
        <form className="max-w-md mx-auto space-y-4 bg-white bg-opacity-20 p-8 rounded-lg shadow-lg backdrop-blur-sm">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded bg-white bg-opacity-50 text-gray-800 placeholder-gray-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded bg-white bg-opacity-50 text-gray-800 placeholder-gray-500"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 border border-gray-300 rounded bg-white bg-opacity-50 text-gray-800 placeholder-gray-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;