import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp7jA3DrW9RCi5YFMj_fiJ-N8t-IF5M2E",
  authDomain: "wd29-a8133.firebaseapp.com",
  databaseURL: "https://wd29-a8133-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wd29-a8133",
  storageBucket: "wd29-a8133.appspot.com",
  messagingSenderId: "600682734449",
  appId: "1:600682734449:web:9a25f7ae7ae1688a5accd0",
  measurementId: "G-SB9ZFSFS82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


  /*---------------------------------------------------------------- */

  const signupForm = document.getElementById("signupForm");
  console.log("register")

  signupForm.addEventListener("click", () => {
    const firstName = document.getElementById("userfirstName").value;
    const lastName = document.getElementById("userlastName").value;
    const email = document.getElementById("userEmail").value;
    const password = document.getElementById("userPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    
    // Maximum of 30 firstname length must not be 1 character 
    if (firstName.length >=30 || firstName.length <= 1)
    {
        $("#errorName").text("First Name must be at least 2 characters");
        return false
    }

    //Regular expression format para hindi makalusot mga blank at special characters sa email
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
    {
        $("#userEmail").css("border-bottom", "solid red 2px");
        $("#errorEmail").text("Invalid email address format");
        return false
    }

    if(password === confirmPassword) {
      const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }else{
      alert("Passwords do not match.")
    }
    
  });