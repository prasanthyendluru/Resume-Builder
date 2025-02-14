import React, { useState } from "react";

const FAQ = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the active FAQ section
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
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
        <h2 className="text-3xl font-bold text-white mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs && faqs.length > 0 ? (
            faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
                {/* Question Title */}
                <div
                  className={`p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors ${
                    activeIndex === index ? "bg-blue-50" : ""
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {faq.title}
                    </h3>
                    <span className="text-gray-500">
                      {activeIndex === index ? "-" : "+"}
                    </span>
                  </div>
                </div>
                {/* Question Content */}
                {activeIndex === index && (
                  <div className="p-4 bg-white border-t">
                    <p className="text-gray-700">{faq.content}</p>
                    {faq.link && (
                      <a
                        href={faq.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-2 text-blue-500 hover:underline"
                      >
                        {faq.link.text}
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-white">No FAQs available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;