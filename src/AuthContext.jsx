import React, { createContext, useState, useEffect } from "react";
import { auth } from "./firebase"; // Import Firebase auth
import { onAuthStateChanged, signOut } from "firebase/auth";

// Create Auth Context
export const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Tracks the authenticated user
  const [loading, setLoading] = useState(true); // Tracks loading state during auth initialization

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        if (currentUser) {
          setUser(currentUser); // User is logged in
        } else {
          setUser(null); // User is logged out
        }
        setLoading(false); // Stop loading once the state is determined
      },
      (error) => {
        console.error("Authentication state error:", error);
        setLoading(false); // Ensure loading stops even if there's an error
      }
    );

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  // Logout Function
  const logout = async () => {
    try {
      await signOut(auth); // Sign out using Firebase
      setUser(null); // Reset user state
    } catch (error) {
      console.error("Error logging out:", error);
      alert("Failed to log out. Please try again.");
    }
  };

  // Check if the user is logged in
  const isLoggedIn = () => !!user;

  // Provide context values to child components
  const value = {
    user,
    loading,
    isLoggedIn,
    logout,
  };

  // Render children only after authentication state is determined
  if (loading) {
    return <div>Loading...</div>; // You can replace this with a custom loader component
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};