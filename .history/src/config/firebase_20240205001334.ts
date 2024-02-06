// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXzQPkCsYKttYouVkFv4r2aLbj-85i5zE",
  authDomain: "react-course-dd6fc.firebaseapp.com",
  projectId: "react-course-dd6fc",
  storageBucket: "react-course-dd6fc.appspot.com",
  messagingSenderId: "692642929267",
  appId: "1:692642929267:web:22ba5d27ba69920755e806"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
