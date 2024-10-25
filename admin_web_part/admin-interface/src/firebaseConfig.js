import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCM11hu8a-22ous2dLL1UQ-ydgiD_GN210",
  authDomain: "la-forge-je-daii-application.firebaseapp.com",
  projectId: "la-forge-je-daii-application",
  storageBucket: "la-forge-je-daii-application.appspot.com",
  messagingSenderId: "673543765094",
  appId: "1:673543765094:web:649af298c798de26ca41a7",
  measurementId: "G-C8KXVXLHV0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);  // Initialiser Firebase Auth
const analytics = getAnalytics(app);

export { db, auth, analytics };
