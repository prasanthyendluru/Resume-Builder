import React from "react";

const BasicInfoSection = ({ formData, handleInputChange, handlePhotoUpload }) => {
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">Basic Information</h3>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Position</label>
        <input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">LinkedIn Profile URL</label>
        <input
          type="url"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Upload Profile Photo</label>
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoUpload}
          className="w-full p-2 border rounded"
        />
      </div>
    </div>
  );
};

export default BasicInfoSection;