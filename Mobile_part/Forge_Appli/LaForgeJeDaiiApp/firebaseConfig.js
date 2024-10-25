// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM11hu8a-22ous2dLL1UQ-ydgiD_GN210",
  authDomain: "la-forge-je-daii-application.firebaseapp.com",
  projectId: "la-forge-je-daii-application",
  storageBucket: "la-forge-je-daii-application.appspot.com",
  messagingSenderId: "673543765094",
  appId: "1:673543765094:web:649af298c798de26ca41a7",
  measurementId: "G-C8KXVXLHV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);s