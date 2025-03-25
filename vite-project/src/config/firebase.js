// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKyN-tRhDjFfMOsn3stev_ieWrlcW9VFs",
  authDomain: "vite-contact-7c344.firebaseapp.com",
  projectId: "vite-contact-7c344",
  storageBucket: "vite-contact-7c344.firebasestorage.app",
  messagingSenderId: "899917852984",
  appId: "1:899917852984:web:f53d6196d2088f2d0991cd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)