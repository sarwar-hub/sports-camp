// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC60DT5lC_nQQcYzHqvhAtW3oVDOQu30GI",
  authDomain: "sports-camp-17da1.firebaseapp.com",
  projectId: "sports-camp-17da1",
  storageBucket: "sports-camp-17da1.appspot.com",
  messagingSenderId: "277415434385",
  appId: "1:277415434385:web:4f27b5a9741acb9dfb0730"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;