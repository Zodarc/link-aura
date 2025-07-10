// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
  OAuthProvider,
  signInWithPopup,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC52fIj4r4VZ1kAH0MKbISWkxb4rIsHguM",
  authDomain: "link-aura.firebaseapp.com",
  projectId: "link-aura",
  storageBucket: "link-aura.firebasestorage.app",
  messagingSenderId: "943670342944",
  appId: "1:943670342944:web:ec75c7103b9e604ff45345",
  measurementId: "G-B6DJVCG74E",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Providers
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const githubProvider = new GithubAuthProvider();
const appleProvider = new OAuthProvider("apple.com");

// Export auth and providers
export {
  auth,
  googleProvider,
  facebookProvider,
  twitterProvider,
  githubProvider,
  appleProvider,
  signInWithPopup,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
};
