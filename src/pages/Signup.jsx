import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle Signup
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login");
    } catch (error) {
      alert("Signup failed: " + error.message);
    }
  };

  return (
    <>
      <Header />
      {/* Background Image and Transparent Form */}
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('/pic5.jpg')", // Replace with your preferred image URL
          backgroundAttachment: "fixed", // Creates the scrolling effect
        }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Transparent Form */}
        <form
          onSubmit={handleSignup}
          className="relative z-10 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Sign Up
          </h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Signup;