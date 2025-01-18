
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




/////   Initialize variables...
let email = document.getElementById("email")
let password = document.getElementById("pass")
let signUpBttn = document.getElementById("signUpBttn")

let signInEmail = document.getElementById("signIn-email")
let signInPass = document.getElementById("SignIn-pass")
let signInbttn = document.getElementById("signInBttn")

const user = auth.currentUser;

let mainDiv = document.getElementById("main");

let mainContainerDiv = document.getElementById("main-container");
let h1 = document.getElementById("h1");

let googleBttn = document.getElementById("googleBttn");



//// Creating Users Accounts! ///////////
signUpBttn.addEventListener("click", async () => {
  await createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      let span1 = document.getElementById("spanSU")
      span1.innerHTML = "SUCESSED!"
      console.log("Account Created Successfully!")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
      console.log("Account Creation Failed")
      // ..
    });
});





/////////Signing In User's Account ////
signInbttn.addEventListener("click", async () => {
  await signInWithEmailAndPassword(auth, signInEmail.value, signInPass.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("User Sign-In Successfully")
      let span2 = document.getElementById("spanSI")
      span2.innerHTML = "SUCESSED!"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Sign-in Failed")
      console.log(errorCode, errorMessage)
    });
});



/////////Checking If User Already Exists////
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User Logged In")
    const uid = user.uid;
    mainDiv.style.display = "none";
    mainContainerDiv.style.display = "block";
    h1.innerHTML = email.value;

  } else {
    mainDiv.style.display = "block";
    mainContainerDiv.style.display = "none";
    console.log("User Didn't Exists!");
    // ...
  }
});



googleBttn.addEventListener("click", async() => {
  await signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...

      console.log("Sign-In With Google Successfull!")
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log(errorCode, errorMessage)
      console.log("Sign-In With Google Faild!")
    });
});


