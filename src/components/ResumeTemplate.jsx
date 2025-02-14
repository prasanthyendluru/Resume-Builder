import React from "react";

// Reusable Section Component
const Section = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <div>{children}</div>
  </div>
);

// Template 1: Modern with Split Layout
export const Template1 = ({ formData }) => {
  return (
    <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
      {/* Left Sidebar */}
      <div className="w-1/3 bg-gray-800 text-white p-6">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          {formData.photo ? (
            <img
              src={formData.photo}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-white"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center border-4 border-white">
              <span className="text-2xl text-gray-600">👤</span>
            </div>
          )}
        </div>
        <h1 className="text-2xl font-bold text-center">{formData.name}</h1>
        <p className="text-sm text-center">{formData.position}</p>
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <p className="text-sm">📞 {formData.phone}</p>
          <p className="text-sm">✉️ {formData.email}</p>
          {formData.linkedin && (
            <a href={formData.linkedin} className="text-sm text-blue-400 underline">
              🔗 LinkedIn
            </a>
          )}
        </div>
        <Section title="Skills">
          <ul className="list-disc pl-6">
            {formData.skills.split(",").map((skill, index) => (
              <li key={index}>{skill.trim()}</li>
            ))}
          </ul>
        </Section>
        <Section title="Languages">
          <ul className="list-disc pl-6">
            {formData.languages.split(",").map((language, index) => (
              <li key={index}>{language.trim()}</li>
            ))}
          </ul>
        </Section>
      </div>

      {/* Right Main Section */}
      <div className="w-2/3 p-6 text-black">
        <Section title="Summary">
          <p>{formData.summary}</p>
        </Section>
        <Section title="Work Experience">
          {formData.experience.map((job, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-semibold">{job.title}</h4>
              <p className="text-sm text-gray-600">{job.company} | {job.dates}</p>
              <p>{job.description}</p>
            </div>
          ))}
        </Section>
        <Section title="Education">
          {formData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-semibold">{edu.degree}</h4>
              <p className="text-sm text-gray-600">{edu.institution} | {edu.dates}</p>
              <p>CGPA: {edu.cgpa}, Specialization: {edu.specialization}</p>
            </div>
          ))}
        </Section>
        <Section title="Achievements">
          <ul className="list-disc pl-6">
            {formData.achievements.split(",").map((achievement, index) => (
              <li key={index}>{achievement.trim()}</li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
};

// Template 2: Minimalist with Vertical Sections
export const Template2 = ({ formData }) => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      {/* Profile Picture */}
      <div className="flex justify-center mb-6">
        {formData.photo ? (
          <img
            src={formData.photo}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-white"
          />
        ) : (
          <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center border-4 border-white">
            <span className="text-2xl text-gray-600">👤</span>
          </div>
        )}
      </div>
      <h1 className="text-3xl font-bold text-center mb-2">{formData.name}</h1>
      <p className="text-sm text-gray-600 text-center">{formData.position}</p>
      <div className="mt-4 text-center">
        <p className="text-sm">📞 {formData.phone}</p>
        <p className="text-sm">✉️ {formData.email}</p>
        {formData.linkedin && (
          <a href={formData.linkedin} className="text-sm text-blue-500 underline">
          🔗 LinkedIn
          </a>
        )}
      </div>

      <Section title="Summary">
        <p>{formData.summary}</p>
      </Section>

      <Section title="Work Experience">
        {formData.experience.map((job, index) => (
          <div key={index} className="mb-4 border-b border-gray-200 pb-4">
            <h4 className="font-semibold">{job.title}</h4>
            <p className="text-sm text-gray-600">{job.company} | {job.dates}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </Section>

      <Section title="Education">
        {formData.education.map((edu, index) => (
          <div key={index} className="mb-4 border-b border-gray-200 pb-4">
            <h4 className="font-semibold">{edu.degree}</h4>
            <p className="text-sm text-gray-600">{edu.institution} | {edu.dates}</p>
            <p>CGPA: {edu.cgpa}, Specialization: {edu.specialization}</p>
          </div>
        ))}
      </Section>

      <Section title="Skills">
        <ul className="list-disc pl-6">
          {formData.skills.split(",").map((skill, index) => (
            <li key={index}>{skill.trim()}</li>
          ))}
        </ul>
      </Section>

      <Section title="Achievements">
        <ul className="list-disc pl-6">
          {formData.achievements.split(",").map((achievement, index) => (
            <li key={index}>{achievement.trim()}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
};

// Template 3: Creative with Horizontal Sections
export const Template3 = ({ formData }) => {
  return (
    <div className="flex bg-white rounded-lg shadow-md p-6">
      {/* Left Column */}
      <div className="w-1/3 pr-6 border-r border-gray-200">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          {formData.photo ? (
            <img
              src={formData.photo}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-white"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center border-4 border-white">
              <span className="text-2xl text-gray-600">👤</span>
            </div>
          )}
        </div>
        <h1 className="text-2xl font-bold text-center mb-2">{formData.name}</h1>
        <p className="text-sm text-gray-600 text-center">{formData.position}</p>
        <div className="mt-4 text-center">
          <p className="text-sm">📞 {formData.phone}</p>
          <p className="text-sm">✉️ {formData.email}</p>
          {formData.linkedin && (
            <a href={formData.linkedin} className="text-sm text-blue-500 underline">
              🔗 LinkedIn
            </a>
          )}
        </div>

        <Section title="Summary">
          <p>{formData.summary}</p>
        </Section>

        <Section title="Skills">
          <ul className="list-disc pl-6">
            {formData.skills.split(",").map((skill, index) => (
              <li key={index}>{skill.trim()}</li>
            ))}
          </ul>
        </Section>

        <Section title="Languages">
          <ul className="list-disc pl-6">
            {formData.languages.split(",").map((language, index) => (
              <li key={index}>{language.trim()}</li>
            ))}
          </ul>
        </Section>
      </div>

      {/* Right Column */}
      <div className="w-2/3 pl-6">
        <Section title="Work Experience">
          {formData.experience.map((job, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-semibold">{job.title}</h4>
              <p className="text-sm text-gray-600">{job.company} | {job.dates}</p>
              <p>{job.description}</p>
            </div>
          ))}
        </Section>

        <Section title="Education">
          {formData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-semibold">{edu.degree}</h4>
              <p className="text-sm text-gray-600">{edu.institution} | {edu.dates}</p>
              <p>CGPA: {edu.cgpa}, Specialization: {edu.specialization}</p>
            </div>
          ))}
        </Section>

        <Section title="Achievements">
          <ul className="list-disc pl-6">
            {formData.achievements.split(",").map((achievement, index) => (
              <li key={index}>{achievement.trim()}</li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
};

// Template 4: Dark Theme with Vertical Sections
export const Template4 = ({ formData }) => {
  return (
    <div className="p-8 bg-gray-900 text-white rounded-lg shadow-md">
      {/* Profile Picture */}
      <div className="flex justify-center mb-6">
        {formData.photo ? (
          <img
            src={formData.photo}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-white"
          />
        ) : (
          <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center border-4 border-white">
            <span className="text-2xl text-gray-600">👤</span>
          </div>
        )}
      </div>
      <h1 className="text-3xl font-bold text-center mb-2">{formData.name}</h1>
      <p className="text-sm text-gray-400 text-center">{formData.position}</p>
      <div className="mt-4 text-center">
        <p className="text-sm">📞 {formData.phone}</p>
        <p className="text-sm">✉️ {formData.email}</p>
        {formData.linkedin && (
          <a href={formData.linkedin} className="text-sm text-blue-400 underline">
            🔗 LinkedIn
          </a>
        )}
      </div>

      <Section title="Summary">
        <p>{formData.summary}</p>
      </Section>

      <Section title="Work Experience">
        {formData.experience.map((job, index) => (
          <div key={index} className="mb-4 border-b border-gray-700 pb-4">
            <h4 className="font-semibold">{job.title}</h4>
            <p className="text-sm text-gray-400">{job.company} | {job.dates}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </Section>

      <Section title="Education">
        {formData.education.map((edu, index) => (
          <div key={index} className="mb-4 border-b border-gray-700 pb-4">
            <h4 className="font-semibold">{edu.degree}</h4>
            <p className="text-sm text-gray-400">{edu.institution} | {edu.dates}</p>
            <p>CGPA: {edu.cgpa}, Specialization: {edu.specialization}</p>
          </div>
        ))}
      </Section>

      <Section title="Skills">
        <ul className="list-disc pl-6">
          {formData.skills.split(",").map((skill, index) => (
            <li key={index}>{skill.trim()}</li>
          ))}
        </ul>
      </Section>

      <Section title="Achievements">
        <ul className="list-disc pl-6">
          {formData.achievements.split(",").map((achievement, index) => (
            <li key={index}>{achievement.trim()}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
};

// Template 5: Creative with Icons
export const Template5 = ({ formData }) => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      {/* Profile Picture */}
      <div className="flex justify-center mb-6">
        {formData.photo ? (
          <img
            src={formData.photo}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-white"
          />
        ) : (
          <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center border-4 border-white">
            <span className="text-2xl text-gray-600">👤</span>
          </div>
        )}
      </div>
      <h1 className="text-3xl font-bold text-center mb-2">{formData.name}</h1>
      <p className="text-sm text-gray-600 text-center">{formData.position}</p>
      <div className="mt-4 text-center">
        <p className="text-sm">📞 {formData.phone}</p>
        <p className="text-sm">✉️ {formData.email}</p>
        {formData.linkedin && (
          <a href={formData.linkedin} className="text-sm text-blue-500 underline">
            🔗 LinkedIn
          </a>
        )}
      </div>

      <Section title="Summary">
        <p>{formData.summary}</p>
      </Section>

      <Section title="Work Experience">
        {formData.experience.map((job, index) => (
          <div key={index} className="mb-4 border-b border-gray-200 pb-4">
            <h4 className="font-semibold">{job.title}</h4>
            <p className="text-sm text-gray-600">{job.company} | {job.dates}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </Section>

      <Section title="Education">
        {formData.education.map((edu, index) => (
          <div key={index} className="mb-4 border-b border-gray-200 pb-4">
            <h4 className="font-semibold">{edu.degree}</h4>
            <p className="text-sm text-gray-600">{edu.institution} | {edu.dates}</p>
            <p>CGPA: {edu.cgpa}, Specialization: {edu.specialization}</p>
          </div>
        ))}
      </Section>

      <Section title="Skills">
        <ul className="list-disc pl-6">
          {formData.skills.split(",").map((skill, index) => (
            <li key={index}>{skill.trim()}</li>
          ))}
        </ul>
      </Section>

      <Section title="Achievements">
        <ul className="list-disc pl-6">
          {formData.achievements.split(",").map((achievement, index) => (
            <li key={index}>{achievement.trim()}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
};

// Template 6: Bold with Color Blocks
export const Template6 = ({ formData }) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-blue-500 text-white p-6">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          {formData.photo ? (
            <img
              src={formData.photo}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-white"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center border-4 border-white">
              <span className="text-2xl text-gray-600">👤</span>
            </div>
          )}
        </div>
        <h1 className="text-3xl font-bold text-center">{formData.name}</h1>
        <p className="text-sm text-center">{formData.position}</p>
        <div className="mt-4 text-center">
          <p className="text-sm">📞 {formData.phone}</p>
          <p className="text-sm">✉️ {formData.email}</p>
          {formData.linkedin && (
            <a href={formData.linkedin} className="text-sm underline">
              🔗 LinkedIn
            </a>
          )}
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gray-100 p-6">
        <Section title="Summary">
          <p>{formData.summary}</p>
        </Section>
      </div>

      {/* Work Experience */}
      <div className="bg-white p-6">
        <Section title="Work Experience">
          {formData.experience.map((job, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-semibold">{job.title}</h4>
              <p className="text-sm text-gray-600">{job.company} | {job.dates}</p>
              <p>{job.description}</p>
            </div>
          ))}
        </Section>
      </div>

      {/* Education */}
      <div className="bg-gray-100 p-6">
        <Section title="Education">
          {formData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-semibold">{edu.degree}</h4>
              <p className="text-sm text-gray-600">{edu.institution} | {edu.dates}</p>
              <p>CGPA: {edu.cgpa}, Specialization: {edu.specialization}</p>
            </div>
          ))}
        </Section>
      </div>

      {/* Skills */}
      <div className="bg-white p-6">
        <Section title="Skills">
          <ul className="list-disc pl-6">
            {formData.skills.split(",").map((skill, index) => (
              <li key={index}>{skill.trim()}</li>
            ))}
          </ul>
        </Section>
      </div>

      {/* Achievements */}
      <div className="bg-gray-100 p-6">
        <Section title="Achievements">
          <ul className="list-disc pl-6">
            {formData.achievements.split(",").map((achievement, index) => (
              <li key={index}>{achievement.trim()}</li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
};