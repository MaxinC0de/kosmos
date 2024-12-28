// src/firebase.js
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore" // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC04hKJicOUG4zxat5gdsA_lnoMq4p0fo0",
  authDomain: "kosmos-5ba49.firebaseapp.com",
  projectId: "kosmos-5ba49",
  storageBucket: "kosmos-5ba49.appspot.com",
  messagingSenderId: "787031487109",
  appId: "1:787031487109:web:6666fa354ad07be5692fec",
  measurementId: "G-HYMTH3LCDC",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app) // Initialize Firestore

export { db } // Export Firestore for use in other parts of your app
