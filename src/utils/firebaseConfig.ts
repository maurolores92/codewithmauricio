import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3txmNzOr7lNaEL1ZsDN16nnQPxWx_3uA",
  authDomain: "codewithmauricio-cf0ff.firebaseapp.com",
  projectId: "codewithmauricio-cf0ff",
  storageBucket: "codewithmauricio-cf0ff.appspot.com",
  messagingSenderId: "940825678761",
  appId: "1:940825678761:web:db38db6caed21d71de2ab8",
  measurementId: "G-PZ3YGL255E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);