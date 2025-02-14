import React from "react";

const SummarySection = ({ formData, handleInputChange, getAISuggestions, loadingAI }) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-800 mb-2">Summary</h3>
      <textarea
        name="summary"
        value={formData.summary}
        onChange={handleInputChange}
        placeholder="Enter your professional summary here..."
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 h-32 resize-none"
      />
      
    </div>
  );
};

export default SummarySection;