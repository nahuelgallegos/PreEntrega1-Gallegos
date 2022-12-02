import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
console.log (getFirestore)
const firebaseConfig = {
  apiKey: "AIzaSyBCyyHnsdZVGmS_Nutv-eremDSwiKJaWOA",
  authDomain: "proyecto-final-gallegos.firebaseapp.com",
  projectId: "proyecto-final-gallegos",
  storageBucket: "proyecto-final-gallegos.appspot.com",
  messagingSenderId: "911333449463",
  appId: "1:911333449463:web:d8883a04836c6d246dfdf2"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)