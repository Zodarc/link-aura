// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC52fIj4r4VZ1kAH0MKbISWkxb4rIsHguM",
  authDomain: "link-aura.firebaseapp.com",
  projectId: "link-aura",
  storageBucket: "link-aura.firebasestorage.app",
  messagingSenderId: "943670342944",
  appId: "1:943670342944:web:ec75c7103b9e604ff45345",
  measurementId: "G-B6DJVCG74E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);