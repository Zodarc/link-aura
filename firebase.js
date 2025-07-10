import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC52fIj4r4VZ1kAH0MKbISWkxb4rIsHguM",
  authDomain: "link-aura.firebaseapp.com",
  projectId: "link-aura",
  storageBucket: "link-aura.firebasestorage.app",
  messagingSenderId: "943670342944",
  appId: "1:943670342944:web:ec75c7103b9e604ff45345",
  measurementId: "G-B6DJVCG74E"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);  // << Add this export
