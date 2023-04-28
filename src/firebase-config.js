// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDRww1jin7Ap42WfhWJmP_dnCVglOttoTo",
  authDomain: "nft-market-32ce8.firebaseapp.com",
  projectId: "nft-market-32ce8",
  storageBucket: "nft-market-32ce8.appspot.com",
  messagingSenderId: "333532361090",
  appId: "1:333532361090:web:230541ac86897da3019f9b",
  measurementId: "G-BB0YNG6111",
  databaseURL: "https://nft-market-32ce8-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const database = getDatabase(app);

