import React from "react";

const SkillsLanguagesAchievementsSection = ({ formData, handleInputChange }) => {
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">Skills</h3>
      <input
        type="text"
        name="skills"
        value={formData.skills}
        onChange={handleInputChange}
        placeholder="Enter skills (comma-separated)"
        className="w-full p-2 border rounded mb-4"
      />

      <h3 className="text-lg font-bold text-gray-800 mb-2">Languages</h3>
      <input
        type="text"
        name="languages"
        value={formData.languages}
        onChange={handleInputChange}
        placeholder="Enter languages known (comma-separated)"
        className="w-full p-2 border rounded mb-4"
      />

      <h3 className="text-lg font-bold text-gray-800 mb-2">Achievements</h3>
      <input
        type="text"
        name="achievements"
        value={formData.achievements}
        onChange={handleInputChange}
        placeholder="Enter achievements (comma-separated)"
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default SkillsLanguagesAchievementsSection;