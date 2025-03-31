// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1I6lEsXR3dx0X7W6Q-ssCzIxtF5bB9rE",
  authDomain: "gf-web-6b594.firebaseapp.com",
  projectId: "gf-web-6b594",
  storageBucket: "gf-web-6b594.firebasestorage.app",
  messagingSenderId: "788421774756",
  appId: "1:788421774756:web:eb9be9dba5241a68ab4531",
  measurementId: "G-0QFLK69P92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);