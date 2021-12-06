import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5KawZb5yHfwC9ZKgdgrns-1lhyw7aqXQ",
  authDomain: "homebase-749ef.firebaseapp.com",
  projectId: "homebase-749ef",
  storageBucket: "homebase-749ef.appspot.com",
  messagingSenderId: "583417805639",
  appId: "1:583417805639:web:6f636f1db8fe71c4ebea62",
  measurementId: "G-Y0PB0FGCEK"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();