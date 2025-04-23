// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE2l8seLL9v5qMeqcYEMm5VkpooyiI7QM",
  authDomain: "netflix-gpt-c77a8.firebaseapp.com",
  projectId: "netflix-gpt-c77a8",
  storageBucket: "netflix-gpt-c77a8.firebasestorage.app",
  messagingSenderId: "101832878503",
  appId: "1:101832878503:web:c669457ff4a80b58506e82",
  measurementId: "G-322Q6WXHC4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();