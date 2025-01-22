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

let email = document.getElementById("email");
let password = document.getElementById("pass");
let signUpBttn = document.getElementById("signUpBttn");
let naame = document.getElementById("naame")
let phoneNum = document.getElementById("phoneNum")



//// Creating Users Accounts! ///////////
signUpBttn.addEventListener("click", async () => {
    await createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            let span1 = document.getElementById("spanSU")
            span1.innerHTML = "SUCESSED!"
            console.log("Account Created Successfully!")
            const docRef = addDoc(collection(db, "users"), {
                Name: naame.value,
                PhoneNumber: phoneNum.value,
                Email: email.value,
            });
            console.log("Document written with ID: ", docRef.id);
            // const querySnapshot = getDocs(collection(db, "users"));
            // querySnapshot.forEach((doc) => {
            //   console.log(`${doc.id} => ${doc.data()}`);
            // });
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