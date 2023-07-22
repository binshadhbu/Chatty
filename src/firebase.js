import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use


const firebaseConfig = {
  apiKey: "AIzaSyB39TfA6ZNmr7VbKpkVbdvF3A-sZMyz68E",
  authDomain: "chatty-f89d0.firebaseapp.com",
  projectId: "chatty-f89d0",
  storageBucket: "chatty-f89d0.appspot.com",
  messagingSenderId: "134699982801",
  appId: "1:134699982801:web:2ee9166290e7dd9e9b8af0",
  measurementId: "G-CJNJZN8T9R",
  
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
