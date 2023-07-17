// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxpxkK0_ZTvsGE2SHGrFoF6b2y_wUGqIE",
  authDomain: "nextjs-auth-382f4.firebaseapp.com",
  projectId: "nextjs-auth-382f4",
  storageBucket: "nextjs-auth-382f4.appspot.com",
  messagingSenderId: "525449543008",
  appId: "1:525449543008:web:b9bcbb6b5a243563f9f205",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
