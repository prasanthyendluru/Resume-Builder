import React from "react";

const WorkExperienceSection = ({
  formData,
  handleExperienceChange,
  addExperience,
}) => {
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">Work Experience</h3>
      {formData.experience.map((job, index) => (
        <div key={index} className="mb-6">
          <label className="block text-gray-700">Job Title</label>
          <input
            type="text"
            value={job.title}
            onChange={(e) =>
              handleExperienceChange(index, "title", e.target.value)
            }
            className="w-full p-2 border rounded mb-2"
          />
          <label className="block text-gray-700">Company</label>
          <input
            type="text"
            value={job.company}
            onChange={(e) =>
              handleExperienceChange(index, "company", e.target.value)
            }
            className="w-full p-2 border rounded mb-2"
          />
          <label className="block text-gray-700">Dates of Employment</label>
          <input
            type="text"
            value={job.dates}
            onChange={(e) =>
              handleExperienceChange(index, "dates", e.target.value)
            }
            className="w-full p-2 border rounded mb-2"
          />
          <label className="block text-gray-700">Description</label>
          <textarea
            value={job.description}
            onChange={(e) =>
              handleExperienceChange(index, "description", e.target.value)
            }
            className="w-full p-2 border rounded mb-2"
          />
        </div>
      ))}
      <button
        onClick={addExperience}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600 transition"
      >
        Add Another Job
      </button>
    </div>
  );
};

export default WorkExperienceSection;