// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCtHLzlGrsd3l5h8Zql5xSz8_FcX7QHSv8",
  authDomain: "react-firechat-ce8c8.firebaseapp.com",
  projectId: "react-firechat-ce8c8",
  storageBucket: "react-firechat-ce8c8.appspot.com",
  messagingSenderId: "379141925525",
  appId: "1:379141925525:web:d0daa5e4be40f975b2899c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()