import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt1_or7RUJOeLaHPnX1CAiJsNBLs-urOQ",
  authDomain: "auth-e54ad.firebaseapp.com",
  projectId: "auth-e54ad",
  storageBucket: "auth-e54ad.firebasestorage.app",
  messagingSenderId: "561032663377",
  appId: "1:561032663377:web:d11a647ec4b8bded2a0370"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

const auth = getAuth()

export {auth};
export default db;