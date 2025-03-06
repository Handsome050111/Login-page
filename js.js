
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXv1x7F3ydOfWZoNNhHM0bvQCUZthHVxM",
  authDomain: "login-page-c8673.firebaseapp.com",
  projectId: "login-page-c8673",
  storageBucket: "login-page-c8673.firebasestorage.app",
  messagingSenderId: "241656476001",
  appId: "1:241656476001:web:166ccd8dd4d83d0e1dd520",
  measurementId: "G-3K92NM2H6V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
