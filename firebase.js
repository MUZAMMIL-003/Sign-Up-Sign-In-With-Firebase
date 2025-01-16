
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
import {  getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
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
// const db = getFirestore(app);

let email = document.getElementById("email")
let password = document.getElementById("pass")
let signUpBttn = document.getElementById("signUpBttn")



//// Creating Users Accounts! ///////////

signUpBttn.addEventListener("click", async () => {
await createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    // email.value;
    // password.value;
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


let signInEmail = document.getElementById("signIn-email")
let signInPass = document.getElementById("SignIn-pass")
let signInbttn = document.getElementById("signInBttn")


/////////Signing In User's Account ////
signInbttn.addEventListener("click", async () => {
await signInWithEmailAndPassword(auth, signInEmail.value,  signInPass.value)
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
    //   console.log(uid)
      // ...
    } else {
      // User is signed out
    
    console.log("User Didn't Exists!");
      // ...
    }
  });



  const user = auth.currentUser;

if (user) {
    console.log(user.value)

} else {
  // No user is signed in.
}

  