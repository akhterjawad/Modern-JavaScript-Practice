import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js";
// import { auth } from "./config.js";


let form = document.querySelector('#form');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
form.addEventListener('submit',event=>{
    event.preventDefault();
     
signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    window.location=`home.html`;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    
  });
})