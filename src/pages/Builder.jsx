import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumePDF from "../components/ResumePDF";
import {
  Template1,
  Template2,
  Template3,
  Template4,
  Template5,
  Template6,
} from "../components/ResumeTemplate";
import BasicInfoSection from "../sections/BasicInfoSection";
import SummarySection from "../sections/SummarySection";
import WorkExperienceSection from "../sections/WorkExperienceSection";
import EducationSection from "../sections/EducationSection";
import SkillsLanguagesAchievementsSection from "../sections/SkillsLanguagesAchievementsSection";
import NavigationButtons from "../sections/NavigationButtons";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { db, auth } from "../firebase";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";

function Builder() {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    phone: "",
    email: "",
    linkedin: "",
    photo: null, // Store uploaded photo as a base64 string
    summary: "",
    experience: [{ title: "", company: "", dates: "", description: "" }],
    education: [
      { degree: "", institution: "", dates: "", cgpa: "", specialization: "" },
    ],
    skills: "",
    languages: "",
    achievements: "",
  });

  const location = useLocation(); // Get the current location
  const queryParams = new URLSearchParams(location.search); // Parse query parameters
  const resumeId = queryParams.get("resumeId"); // Get the resumeId from the query parameter
  const templateFromQuery = queryParams.get("template"); // Get the template from the query parameter

  const [selectedTemplate, setSelectedTemplate] = useState(
    templateFromQuery || "template1" // Set default template if no query parameter
  );

  const [selectedColor, setSelectedColor] = useState("blue"); // Default color theme
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate(); // Hook for navigation

  // Fetch saved resume data when resumeId is present
  useEffect(() => {
    const fetchResumeData = async () => {
      if (resumeId) {
        try {
          const resumeRef = doc(db, "resumes", resumeId);
          const resumeDoc = await getDoc(resumeRef);
          if (resumeDoc.exists()) {
            const data = resumeDoc.data();
            setFormData({
              name: data.name || "",
              position: data.position || "",
              phone: data.phone || "",
              email: data.email || "",
              linkedin: data.linkedin || "",
              photo: data.photo || null,
              summary: data.summary || "",
              experience: data.experience || [
                { title: "", company: "", dates: "", description: "" },
              ],
              education: data.education || [
                { degree: "", institution: "", dates: "", cgpa: "", specialization: "" },
              ],
              skills: data.skills || "",
              languages: data.languages || "",
              achievements: data.achievements || "",
            });
          } else {
            console.error("Resume not found!");
          }
        } catch (error) {
          console.error("Error fetching resume data:", error);
        }
      }
    };

    fetchResumeData();
  }, [resumeId]);

  // Handle Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle File Upload (Profile Photo)
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({ ...prevData, photo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Experience Changes
  const handleExperienceChange = (index, field, value) => {
    setFormData((prevData) => {
      const updatedExperience = [...prevData.experience];
      updatedExperience[index][field] = value;
      return { ...prevData, experience: updatedExperience };
    });
  };

  // Add New Experience Field
  const addExperience = () => {
    setFormData((prevData) => ({
      ...prevData,
      experience: [
        ...prevData.experience,
        { title: "", company: "", dates: "", description: "" },
      ],
    }));
  };

  // Handle Education Changes
  const handleEducationChange = (index, field, value) => {
    setFormData((prevData) => {
      const updatedEducation = [...prevData.education];
      updatedEducation[index][field] = value;
      return { ...prevData, education: updatedEducation };
    });
  };

  // Add New Education Field
  const addEducation = () => {
    setFormData((prevData) => ({
      ...prevData,
      education: [
        ...prevData.education,
        { degree: "", institution: "", dates: "", cgpa: "", specialization: "" },
      ],
    }));
  };

  // Save Resume to Firebase Firestore
  const saveResume = async () => {
    if (!auth.currentUser) {
      alert("You must be logged in to save a resume.");
      return;
    }
    try {
      await addDoc(collection(db, "resumes"), {
        userId: auth.currentUser.uid,
        name: formData.name,
        email: formData.email,
        jobTitle: formData.position,
        phone: formData.phone,
        linkedin: formData.linkedin,
        photo: formData.photo,
        summary: formData.summary,
        experience: formData.experience,
        education: formData.education,
        skills: formData.skills,
        languages: formData.languages,
        achievements: formData.achievements,
        createdAt: new Date(),
      });
      alert("Resume saved successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error saving resume:", error);
      alert("Failed to save resume. Please try again.");
    }
  };

  // Render Current Section
  const renderSection = () => {
    switch (currentStep) {
      case 1:
        return (
          <BasicInfoSection
            formData={formData}
            handleInputChange={handleInputChange}
            handlePhotoUpload={handlePhotoUpload}
          />
        );
      case 2:
        return (
          <SummarySection
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 3:
        return (
          <WorkExperienceSection
            formData={formData}
            handleExperienceChange={handleExperienceChange}
            addExperience={addExperience}
          />
        );
      case 4:
        return (
          <EducationSection
            formData={formData}
            handleEducationChange={handleEducationChange}
            addEducation={addEducation}
          />
        );
      case 5:
        return (
          <SkillsLanguagesAchievementsSection
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* Background Image with Scrolling Effect */}
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('/pic5.jpg')`,
        }}
      ></div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen bg-black bg-opacity-50">
        <Header />
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Preview Section */}
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Preview</h2>
            {selectedTemplate === "template1" && (
              <Template1 formData={formData} color={selectedColor} />
            )}
            {selectedTemplate === "template2" && (
              <Template2 formData={formData} color={selectedColor} />
            )}
            {selectedTemplate === "template3" && (
              <Template3 formData={formData} color={selectedColor} />
            )}
            {selectedTemplate === "template4" && (
              <Template4 formData={formData} color={selectedColor} />
            )}
            {selectedTemplate === "template5" && (
              <Template5 formData={formData} color={selectedColor} />
            )}
            {selectedTemplate === "template6" && (
              <Template6 formData={formData} color={selectedColor} />
            )}
          </div>

          {/* Form Section */}
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Build Your Resume
            </h2>
            {renderSection()}
            <NavigationButtons
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
            <div className="mt-6 space-y-4">
              {/* Download PDF Button */}
              <PDFDownloadLink
                    document={<ResumePDF formData={formData} template={selectedTemplate} />}
                    fileName={`${formData.name}_resume.pdf`}
                    className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300 shadow-md block w-full text-center"
                  >
                    {({ loading }) => (loading ? "Generating PDF..." : "Download PDF")}
              </PDFDownloadLink>
              {/* Save Resume Button */}
              <button
                onClick={saveResume}
                className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-300 shadow-md block w-full text-center"
              >
                Save Resume
              </button>
              {/* Go to Dashboard Button */}
              <button
                onClick={() => navigate("/dashboard")}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 shadow-md block w-full text-center"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Builder;