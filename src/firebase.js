// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvtssOtYDIlMlERkT0UzH-3Pnirrzf-_o",
  authDomain: "e-commerce-6ceeb.firebaseapp.com",
  projectId: "e-commerce-6ceeb",
  storageBucket: "e-commerce-6ceeb.appspot.com",
  messagingSenderId: "1059016112747",
  appId: "1:1059016112747:web:8032bc8095ae545e7d0f2e",
  measurementId: "G-B5DNCCKVH9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);