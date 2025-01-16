// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const apiKey = process.env.FIREBASE_API_KEY

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "miniblog-5cf7a.firebaseapp.com",
  projectId: "miniblog-5cf7a",
  storageBucket: "miniblog-5cf7a.firebasestorage.app",
  messagingSenderId: "893441241837",
  appId: "1:893441241837:web:ef80553dab2e8d697912e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};