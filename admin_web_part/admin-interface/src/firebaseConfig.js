import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';  // Import Firebase Auth

const firebaseConfig = {
  apiKey: "AIzaSyCM1Ihua8-22ous2dLIUQ-vgdi9_GN2l0",
  authDomain: "la-forge-je-daii-application.firebaseapp.com",
  projectId: "la-forge-je-daii-application",
  storageBucket: "la-forge-je-daii-application.appspot.com",
  messagingSenderId: "673543765094",
  appId: "1:673543765094:web:649af298c79bde26ca41a7",
  measurementId: "G-C8XXVXLHV0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);  // Initialiser Firebase Auth

export { db, auth };
