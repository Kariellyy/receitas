// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMkGbup2SzYYJWYYCbsXRVTKCEcvxZda0",
  authDomain: "receitas-9270c.firebaseapp.com",
  projectId: "receitas-9270c",
  storageBucket: "receitas-9270c.appspot.com",
  messagingSenderId: "85746586745",
  appId: "1:85746586745:web:80514dc783b587952370a8",
  measurementId: "G-XS3047G7L5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
