// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdwpAu0WsIXWcyq5VZs5illeU4ZEY1L7s",
  authDomain: "blogeekplatzi-11e40.firebaseapp.com",
  projectId: "blogeekplatzi-11e40",
  storageBucket: "blogeekplatzi-11e40.appspot.com",
  messagingSenderId: "969507840384",
  appId: "1:969507840384:web:0d067bcf45c0664e97e165",
  measurementId: "G-KNLQRX841J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);



