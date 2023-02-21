// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, addDoc,query,getDocs,collection,where}from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyBxnYghg2mf8qt_pqEHPvGTeiLXc2l4VSk",
  authDomain: "fundi-app-5a1a3.firebaseapp.com",
  databaseURL: "https://fundi-app-5a1a3-default-rtdb.firebaseio.com",
  projectId: "fundi-app-5a1a3",
  storageBucket: "fundi-app-5a1a3.appspot.com",
  messagingSenderId: "122078432423",
  appId: "1:122078432423:web:83aa283646d337f9d49f82",
  measurementId: "G-5DKMW5JQ0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const database = getDatabase(app);
