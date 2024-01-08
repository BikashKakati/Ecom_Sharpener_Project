// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuxoZSeVg-LSxZjjjLBaSmKfQrAPoKc44",
  authDomain: "the-generics-store.firebaseapp.com",
  databaseURL: "https://the-generics-store-default-rtdb.firebaseio.com",
  projectId: "the-generics-store",
  storageBucket: "the-generics-store.appspot.com",
  messagingSenderId: "836463333934",
  appId: "1:836463333934:web:02b8b564e3e457d139c5bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app