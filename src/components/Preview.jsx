import React from "react";

function Preview({ formData }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Preview</h2>
      <div className="p-4 bg-white shadow rounded">
        <h3 className="text-xl font-bold">{formData.name}</h3>
        <p className="text-gray-600">{formData.email}</p>
        <p className="text-gray-800 font-semibold">{formData.jobTitle}</p>
        <p className="mt-2">{formData.experience}</p>
        <p className="mt-2"><strong>Skills:</strong> {formData.skills}</p>
      </div>
    </div>
  );
}

export default Preview;