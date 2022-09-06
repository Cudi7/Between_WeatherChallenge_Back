// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

import { collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiUYPCk6BBL6DNr14fyu9KDESwI7TYwpU",
  authDomain: "weather-8ba7b.firebaseapp.com",
  projectId: "weather-8ba7b",
  storageBucket: "weather-8ba7b.appspot.com",
  messagingSenderId: "1087730354775",
  appId: "1:1087730354775:web:dcf22873b8c712013f3112",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const colRef = collection(db, "cities");
