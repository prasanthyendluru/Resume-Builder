import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import googleIcon from "../assets/google.webp"; // Ensure you have a Google icon in your assets
import Footer from "../components/Footer";
import Header from "../components/Header";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // Redirect to dashboard after login
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard"); // Redirect to dashboard after Google Sign-In
    } catch (error) {
      alert("Google Sign-In failed: " + error.message);
    }
  };

  return (
    <>
      <Header />
      {/* Background Image Section */}
      <section
        className="min-h-screen text-white overflow-hidden relative px-4"
        style={{
          backgroundImage: `url('/pic5.jpg')`, // Replace with your actual background image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // Creates the scrolling effect
        }}
      >
        {/* Overlay to Dim the Background */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Transparent Form */}
        <div className="container mx-auto flex items-center justify-center relative z-10 min-h-screen">
          <form
            onSubmit={handleLogin}
            className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-6">
              Login
            </h2>
            <div className="mb-4">
              <label className="block text-white">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded bg-transparent text-white outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>
            <div className="mb-6">
              <label className="block text-white">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border rounded bg-transparent text-white outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
            <div className="mt-4 flex items-center justify-center">
              <button
                onClick={handleGoogleSignIn}
                type="button"
                className="w-full flex items-center justify-center bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300"
              >
                <img src={googleIcon} alt="Google" className="w-6 h-6 mr-2" />
                Login with Google
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Login;