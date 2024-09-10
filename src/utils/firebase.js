// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-e09ff.firebaseapp.com",
  projectId: "blog-e09ff",
  storageBucket: "blog-e09ff.appspot.com",
  messagingSenderId: "42630399084",
  appId: "1:42630399084:web:228dbc71751cbca0c50449"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);