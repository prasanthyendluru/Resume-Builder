import React from "react";

const EducationSection = ({
  formData,
  handleEducationChange,
  addEducation,
}) => {
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">Education</h3>
      {formData.education.map((edu, index) => (
        <div key={index} className="mb-6">
          <label className="block text-gray-700">Degree</label>
          <input
            type="text"
            value={edu.degree}
            onChange={(e) =>
              handleEducationChange(index, "degree", e.target.value)
            }
            className="w-full p-2 border rounded mb-2"
          />
          <label className="block text-gray-700">Institution</label>
          <input
            type="text"
            value={edu.institution}
            onChange={(e) =>
              handleEducationChange(index, "institution", e.target.value)
            }
            className="w-full p-2 border rounded mb-2"
          />
          <label className="block text-gray-700">Dates Attended</label>
          <input
            type="text"
            value={edu.dates}
            onChange={(e) =>
              handleEducationChange(index, "dates", e.target.value)
            }
            className="w-full p-2 border rounded mb-2"
          />
          <label className="block text-gray-700">CGPA</label>
          <input
            type="text"
            value={edu.cgpa}
            onChange={(e) =>
              handleEducationChange(index, "cgpa", e.target.value)
            }
            className="w-full p-2 border rounded mb-2"
          />
          <label className="block text-gray-700">Specialization</label>
          <input
            type="text"
            value={edu.specialization}
            onChange={(e) =>
              handleEducationChange(index, "specialization", e.target.value)
            }
            className="w-full p-2 border rounded"
          />
        </div>
      ))}
      <button
        onClick={addEducation}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600 transition"
      >
        Add Another Degree
      </button>
    </div>
  );
};

export default EducationSection;