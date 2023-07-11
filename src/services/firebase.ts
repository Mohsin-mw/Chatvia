// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPWkH0CaVLep3pTIq1ziV1GeNcIONlfCk",
  authDomain: "chatvia-5a047.firebaseapp.com",
  projectId: "chatvia-5a047",
  storageBucket: "chatvia-5a047.appspot.com",
  messagingSenderId: "315135155009",
  appId: "1:315135155009:web:d9098bd6a32bcbd189dfc0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage();
