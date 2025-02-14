import React from "react";

const NavigationButtons = ({ currentStep, setCurrentStep }) => {
  const handlePrevious = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 5));
  };

  return (
    <div className="flex justify-between mt-6">
      <button
        onClick={handlePrevious}
        disabled={currentStep === 1}
        className={`px-4 py-2 rounded ${
          currentStep === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"
        }`}
      >
        Previous
      </button>
      <button
        onClick={handleNext}
        disabled={currentStep === 5}
        className={`px-4 py-2 rounded ${
          currentStep === 5 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default NavigationButtons;