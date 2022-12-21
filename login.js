import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth,signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
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

loginBtn.addEventListener("click", () => {
    email = document.getElementById('loginEmail').value;
    password = document.getElementById('loginPassword').value;

    if (validate_email(email) == false || validate_password(password) == false){
        alert("Email or Password is wrong!!!")
        return
    }
    auth.signInWithEmailAndPassword(email,password)
    .then(()=>{

    })
    .catch(()=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
    })
})