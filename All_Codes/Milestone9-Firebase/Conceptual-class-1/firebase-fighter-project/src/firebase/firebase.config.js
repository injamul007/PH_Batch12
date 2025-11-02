// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANFTn3lkcnxDE18xJa5aB2W5MtC4bT-lE",
  authDomain: "fir-fighter-bb5ee.firebaseapp.com",
  projectId: "fir-fighter-bb5ee",
  storageBucket: "fir-fighter-bb5ee.firebasestorage.app",
  messagingSenderId: "1012827468829",
  appId: "1:1012827468829:web:8793664a1753a6bb8942f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);