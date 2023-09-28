import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDVZo2AKPTSTmkiO89JktwhfeQIYGp5XNU",
  authDomain: "chat-app-7819d.firebaseapp.com",
  projectId: "chat-app-7819d",
  storageBucket: "chat-app-7819d.appspot.com",
  messagingSenderId: "378480203086",
  appId: "1:378480203086:web:32d0c21d6e0c4446dffa1f",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
