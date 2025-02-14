import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumePDF from "../components/ResumePDF";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from "../assets/resume.png";

function Dashboard() {
  const [resumes, setResumes] = useState([]);
  const [showTemplates, setShowTemplates] = useState(false);
  const navigate = useNavigate();

  // Fetch saved resumes for the logged-in user
  useEffect(() => {
    const fetchResumes = async () => {
      if (!auth.currentUser) return;
      const q = query(
        collection(db, "resumes"),
        where("userId", "==", auth.currentUser.uid)
      );
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setResumes(data);
    };
    fetchResumes();
  }, []);

  const handleTemplateSelect = (template) => {
    setShowTemplates(false);
    navigate(`/builder?template=${template}`);
  };

  // Function to delete a resume
  const deleteResume = async (resumeId) => {
    try {
      const resumeRef = doc(db, "resumes", resumeId);
      await deleteDoc(resumeRef); // Delete the resume from Firestore
      setResumes((prevResumes) =>
        prevResumes.filter((resume) => resume.id !== resumeId)
      ); // Update the state to remove the deleted resume
      alert("Resume deleted successfully!");
    } catch (error) {
      console.error("Error deleting resume:", error);
      alert("Failed to delete resume. Please try again.");
    }
  };

  // Generate a shareable link for a resume
  const generateShareableLink = (type, id) => {
    const baseUrl = window.location.origin; // Get the base URL of your app
    return `${baseUrl}/${type === "resume" ? "builder" : "cover-letter-builder"}?${type}Id=${id}`;
  };

  return (
    <>
      <Header />
      <div className="p-8 bg-gray-50 min-h-screen">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Your Saved Works
        </h2>
        {/* Buttons to Create New Resume */}
        <div className="flex justify-center space-x-4 mb-8">
          {/* Updated "Create New Resume" Button */}
          <Link
            to="/builder"
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300 shadow-md"
          >
            Create New Resume
          </Link>

          {/* Select Template Button */}
          <button
            onClick={() => setShowTemplates(true)}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 shadow-md"
          >
            Select Template
          </button>
        </div>

        {/* Template Selection Modal */}
        {showTemplates && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Select a Template
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {["template1", "template2", "template3", "template4", "template5", "template6"].map(
                  (template) => (
                    <button
                      key={template}
                      onClick={() => handleTemplateSelect(template)}
                      className="border p-4 rounded-lg hover:bg-gray-100 transition duration-300"
                    >
                      {template.charAt(0).toUpperCase() + template.slice(1)}
                    </button>
                  )
                )}
              </div>
              <button
                onClick={() => setShowTemplates(false)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Display Saved Resumes */}
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Saved Resumes</h3>
        {resumes.length === 0 ? (
          <div className="text-center text-gray-600 mb-8">
            <p>No resumes found. Click "Create New Resume" to get started!</p>
          </div>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {resumes.map((resume) => (
              <li
                key={resume.id}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
              >
                {/* Static Image Preview */}
                <img
                  src={resume.photo || logo}
                  alt={`${resume.name} Resume Preview`}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                {/* Resume Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {resume.name}
                </h3>
                {/* Email */}
                <p className="text-gray-600 mb-4">{resume.email}</p>
                {/* Buttons */}
                <div className="flex flex-wrap gap-2 w-full">
                  {/* Edit Button */}
                  <Link
                    to={`/builder?resumeId=${resume.id}`} // Pass the resumeId as a query parameter
                    className="bg-blue-500 bg-opacity-20 text-blue-700 px-3 py-1.5 rounded-lg font-semibold hover:bg-opacity-30 transition duration-300 flex-1 text-center text-sm"
                  >
                    Edit
                  </Link>
                  {/* Download PDF Button */}
                  <PDFDownloadLink
                    document={<ResumePDF formData={resume} />}
                    fileName={`${resume.name}.pdf`}
                    className="bg-green-500 bg-opacity-20 text-green-700 px-3 py-1.5 rounded-lg font-semibold hover:bg-opacity-30 transition duration-300 flex-1 text-center text-sm"
                  >
                    {({ loading }) =>
                      loading ? "Generating..." : "Download"
                    }
                  </PDFDownloadLink>
                  {/* Share Button */}
                  <button
                    onClick={() => {
                      const shareableLink = generateShareableLink("resume", resume.id);
                      navigator.clipboard.writeText(shareableLink).then(() => {
                        alert("Link copied to clipboard!");
                      });
                    }}
                    className="bg-purple-500 bg-opacity-20 text-purple-700 px-3 py-1.5 rounded-lg font-semibold hover:bg-opacity-30 transition duration-300 flex-1 text-center text-sm"
                  >
                    Share
                  </button>
                  {/* Remove Button */}
                  <button
                    onClick={() => deleteResume(resume.id)}
                    className="bg-red-500 bg-opacity-20 text-red-700 px-3 py-1.5 rounded-lg font-semibold hover:bg-opacity-30 transition duration-300 flex-1 text-center text-sm"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;