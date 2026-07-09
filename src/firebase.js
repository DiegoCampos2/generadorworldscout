import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// REEMPLAZA estos valores con los de tu proyecto Firebase
// Consigue la config en: Firebase Console → Project Settings → Your apps → Web App
// Solo necesitas Firestore (gratis en plan Spark) - NO necesitas Storage
const firebaseConfig = {
  apiKey: "AIzaSyDgWKKGXTUH0LxOFvKBKnxBwhPz8qpeqm4",
  authDomain: "caminantesscout-bb94c.firebaseapp.com",
  projectId: "caminantesscout-bb94c",
  storageBucket: "caminantesscout-bb94c.firebasestorage.app",
  messagingSenderId: "773238333754",
  appId: "1:773238333754:web:2122d6cd08b74e11413003"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
