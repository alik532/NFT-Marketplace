// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRww1jin7Ap42WfhWJmP_dnCVglOttoTo",
  authDomain: "nft-market-32ce8.firebaseapp.com",
  projectId: "nft-market-32ce8",
  storageBucket: "nft-market-32ce8.appspot.com",
  messagingSenderId: "333532361090",
  appId: "1:333532361090:web:230541ac86897da3019f9b",
  measurementId: "G-BB0YNG6111"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)