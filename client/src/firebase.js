// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-84f8d.firebaseapp.com",
  projectId: "mern-blog-84f8d",
  storageBucket: "mern-blog-84f8d.appspot.com",
  messagingSenderId: "986615809908",
  appId: "1:986615809908:web:0c4ab9e78d62b0d6144e21"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);