// Importer les fonctions Firebase nécessaires
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Authentification
import { getFirestore } from "firebase/firestore"; // Firestore

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCM11hu8a-22ous2dLL1UQ-ydgiD_GN210",
  authDomain: "la-forge-je-daii-application.firebaseapp.com",
  projectId: "la-forge-je-daii-application",
  storageBucket: "la-forge-je-daii-application.appspot.com",
  messagingSenderId: "673543765094",
  appId: "1:673543765094:web:649af298c798de26ca41a7",
  measurementId: "G-C8KXVXLHV0"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Initialiser Firebase Analytics
const analytics = getAnalytics(app);

// Initialiser l'authentification et Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, analytics }; // Exporter auth, db, et analytics si besoin
