// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-project-d5645.firebaseapp.com",
  projectId: "mern-project-d5645",
  storageBucket: "mern-project-d5645.appspot.com",
  messagingSenderId: "989533392587",
  appId: "1:989533392587:web:c19a899c61f94212b9154e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);