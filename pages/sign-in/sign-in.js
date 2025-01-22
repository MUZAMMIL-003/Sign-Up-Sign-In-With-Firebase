import {
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
} from "./../../firebase.js";



let signInEmail = document.getElementById("signIn-email");
let signInPass = document.getElementById("SignIn-pass");
let signInbttn = document.getElementById("signInBttn");
let googleBttn = document.getElementById("googleBttn");

/////////Signing In User's Account ////
signInbttn.addEventListener("click", async () => {
    await signInWithEmailAndPassword(auth, signInEmail.value, signInPass.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("User Sign-In Successfully")
            console.log(user)
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



googleBttn.addEventListener("click", async () => {
    await signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            console.log(user, token);
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
            console.log(email, credential);
            console.log("Sign-In With Google Faild!")
        });
});

