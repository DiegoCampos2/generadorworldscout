import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// REEMPLAZA estos valores con los de tu proyecto Firebase
// Consigue la config en: Firebase Console → Project Settings → Your apps → Web App
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:xxxxxxxxxxxxxxxxxxxx"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
