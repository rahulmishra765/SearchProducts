// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC4R6AN1km6GnOc70F2m6Nk8A3VcX8q1k0", // This is a sample key, replace with yours
  authDomain: "chat-app-project-12345.firebaseapp.com",
  projectId: "chat-app-project-12345",
  storageBucket: "chat-app-project-12345.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
