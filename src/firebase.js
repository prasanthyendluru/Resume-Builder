// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIPQbVzhjgLYjrELiCvAzgAViBTXm38Jk",
  authDomain: "resume-builder-86509.firebaseapp.com",
  projectId: "resume-builder-86509",
  storageBucket: "resume-builder-86509.firebasestorage.app",
  messagingSenderId: "902791551498",
  appId: "1:902791551498:web:e2a190b633c2aa0959ddf3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const db = getFirestore(app); // Firestore database
export const storage = getStorage(app); // Firebase Storage
export const auth = getAuth(app); // Firebase Authentication