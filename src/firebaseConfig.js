import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC4wINQbu4mBrz0AE7sNo6VJTqeUUeuNuY",
    authDomain: "fir-auth-demo-86d3c.firebaseapp.com",
    projectId: "fir-auth-demo-86d3c",
    storageBucket: "fir-auth-demo-86d3c.firebasestorage.app",
    messagingSenderId: "111998218458",
    appId: "1:111998218458:web:e4c659af571eb509edb5e3",
    measurementId: "G-3MY6TQHWEE"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
