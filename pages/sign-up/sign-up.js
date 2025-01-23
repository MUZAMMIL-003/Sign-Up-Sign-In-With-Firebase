import {
    auth,
    createUserWithEmailAndPassword,
    db,
    collection,
    addDoc,
} from "./../../firebase.js";




const signUpFunc = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("pass");
    let naame = document.getElementById("naame")
    let phoneNum = document.getElementById("phoneNum")
    console.log(email.value , password.value, )

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then(async(userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user)
            // const docRef = await addDoc(collection(db, "users"), {
            //     email,
            //     password,
            //     naame,
            //     phoneNum,
            //   });
            //   console.log("Document written with ID: ", docRef);
            // ...
        })
        .catch((error) => {
        // alert(error.message)
        console.log(error)
        });
        
    }
    
    
const signUpBttn = document.getElementById("signUpBttn");
signUpBttn.addEventListener("click", signUpFunc);

























// //// Creating Users Accounts! ///////////
// signUpBttn.addEventListener("click", async () => {
//     await createUserWithEmailAndPassword(auth, email.value, password.value)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             console.log(user)
//             // let span1 = document.getElementById("spanSU")
//             // span1.innerHTML = "SUCESSED!"
//             console.log("Account Created Successfully!")
//             const docRef = addDoc(collection(db, "users"), {
//                 Name: naame.value,
//                 PhoneNumber: phoneNum.value,
//                 Email: email.value,
//             });
//             console.log("Document written with ID: ", docRef.id);
//             // const querySnapshot = getDocs(collection(db, "users"));
//             // querySnapshot.forEach((doc) => {
//             //   console.log(`${doc.id} => ${doc.data()}`);
//             // });
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorCode, errorMessage)
//             console.log("Account Creation Failed")
//             // ..
//         });
// });