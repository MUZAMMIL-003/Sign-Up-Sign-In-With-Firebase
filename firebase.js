
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,

} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";


/// Exporting All Functions and Variables
export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc
};



const firebaseConfig = {
  apiKey: "AIzaSyDUGNB_d1tXz8dCqMy0ooJ4nNee2mAFTzU",
  authDomain: "first-project-9a7fc.firebaseapp.com",
  projectId: "first-project-9a7fc",
  storageBucket: "first-project-9a7fc.firebasestorage.app",
  messagingSenderId: "5077976363",
  appId: "1:5077976363:web:84cfc0ebd5eb42b754316e",
  measurementId: "G-SKVX8DPQCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const user = auth.currentUser;




/////   Initialize variables...
let email = document.getElementById("email")
let password = document.getElementById("pass")
let signUpBttn = document.getElementById("signUpBttn")




let mainDiv = document.getElementById("main");

let mainContainerDiv = document.getElementById("main-container");
let h1 = document.getElementById("h1");



/////////Checking If User Already Exists////
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User Logged In")
    const uid = user.uid;
    console.log(uid);

  } else {
    window.location.replace("./pages/sign-up/signup.html")
    console.log("User Didn't Exists!");
    // ...
  }
});




