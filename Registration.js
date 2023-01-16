import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import * as firebase from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { getDatabase, update, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import { getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, Timestamp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js'
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

const signupForm = document.querySelector("#signupForm");
// const onClickUserFirstName = document.getElementById("userfirstname")
const db = getDatabase();
// sign-up codes

if (signupForm !== null && signupForm !== undefined) {
  signupForm.addEventListener("click", function () {
    console.log("register")
    const firstName = document.getElementById("userfirstName").value;
    const lastName = document.getElementById("userlastName").value;
    const email = document.getElementById("userEmail").value;
    const password = document.getElementById("userPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Maximum of 30 firstname length must not be 1 character and dont have special characters
    if ((firstName.length >= 30 || firstName.length <= 1) || !(/^[a-zA-Z]+$/.test(firstName))) {
      $("#errorName").text("Invalid First Name");

    }
    if ((lastName.length >= 30 || lastName.length <= 1) || !(/^[a-zA-Z]+$/.test(lastName))) {
      $("#errorName").text("Invalid Last Name");

    }

    //Regular expression format para hindi makalusot mga blank at special characters sa email
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      $("#userEmail").css("border-bottom", "solid red 2px");
      $("#errorEmail").text("Invalid email address format");

    }


    if (password === confirmPassword) {
      const auth = getAuth();

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const date = new Date;
          // Adding the info of the user into the database
          const user = userCredential.user;
          push(ref(db, 'Users/'), {
            firstname: firstName,
            lastName: lastName,
            email: email,
            dateCreated: date
          })
          setDoc(doc(dbFirestore, "signin", email, 'InAndOut', "in"), {

          })
            .then(() => {

            })
            .catch((error) => {

            })
          setDoc(doc(dbFirestore, "signin", email, 'InAndOut', "out"), {

          })
            .then(() => {

            })
            .catch((error) => {

            })
          console.log('success')

          document.getElementById("userfirstName").value = "";
          document.getElementById("userlastName").value = "";
          document.getElementById("userEmail").value = "";
          document.getElementById("userPassword").value = "";
          document.getElementById("confirmPassword").value = "";
          alert('Successfully Registered!')
          document.querySelector('.sign_in_btn').click();

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          // ..
        });
    } else if (password.length < 6 || password.length == 1) {
      $("#errorPassword").text("Password must at least be 6 characters");
    }
    else if (confirmPassword != password) {
      $("#errorConfirmPassword").text("Passwords do not match");
    }


  });
}
// log in code

const loginBtn = document.querySelector('#loginBtn');
const dbFirestore = getFirestore();
if (loginBtn !== null && loginBtn !== undefined) {
  loginBtn.addEventListener("click", () => {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const auth = getAuth();
    const date = new Date;



    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        updateDoc(doc(dbFirestore, "signin", email, 'InAndOut', "in"), {
          [date.toString()]: 'in',

          // signIn: firebase.firestore.FieldValue.arrayUnion(Timestamp.now())
        })
          .then(() => {
            localStorage.setItem('email', email);
            window.open('index_user.html', '_self');
            console.log('login')
          })
          .catch((error) => {
            const err = error.message;
            console.log(err + " sign in date failed")

          })

      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        if (errorMessage == 'Firebase: Error (auth/wrong-password).') {
          $("#errorloginPassword").text("Email and Password do not match.");
        }else if(errorMessage == 'Firebase: Error (auth/user-not-found).'){
          $("#errorloginEmail").text("Email is not registered!");
        }

      });

  })
}

const signOutButton = document.querySelector('#signOutButton');
if (signOutButton !== null && signOutButton !== undefined) {
  signOutButton.addEventListener("click", () => {
    const email = localStorage.getItem('email');
    document.getElementById('emailLogin').dataset.email = email
    const dbFirestore = getFirestore();
    const auth = getAuth();
    const date = new Date;
    signOut(auth).then(() => {
      console.log(document.getElementById('emailLogin').dataset.email);
      updateDoc(doc(dbFirestore, "signin", email, 'InAndOut', "out"), {
        [date.toString()]: 'out',
      })
        .then(() => {
          console.log("sign out date succes")
          window.open('index.html', '_self')
        }
        )
        .catch((error) => {
          const err = error.message;
          console.log(err + " sign out date failed")
        })



    }).catch((error) => {
      const err = error.message;
      console.log(err + " sign out failed")
    });

  })
}









