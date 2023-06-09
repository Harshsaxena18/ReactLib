// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAOpVRLRNJQau1vyf16VOMDcODp_alb6e8",
  authDomain: "lib2-ac106.firebaseapp.com",
  projectId: "lib2-ac106",
  storageBucket: "lib2-ac106.appspot.com",
  messagingSenderId: "415188240181",
  appId: "1:415188240181:web:3df8aeb0ba6109119eee7c",
  measurementId: "G-44KWE5ZV2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);