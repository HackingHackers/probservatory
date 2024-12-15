// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: 'AIzaSyA56Ha9_Hds0GrJ-iJZ_ayPeqUy46xJw7c',
    authDomain: 'psrt-data.firebaseapp.com',
    projectId: 'psrt-data',
    storageBucket: 'psrt-data.firebasestorage.app',
    messagingSenderId: '522997813054',
    appId: '1:522997813054:web:0baa7dd543b947f248266f',
    measurementId: 'G-DFVS3PHZYN',
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore instance
export const db = getFirestore(app);
