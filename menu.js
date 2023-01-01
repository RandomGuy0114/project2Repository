import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField,Timestamp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';
import { getDatabase, update, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

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
firebase.initializeApp(firebaseConfig);
const dbFirestore = firebase.firestore();

const addToCart = document.querySelector('#add');

var foodMenuRef = dbFirestore.collection("Food Menu");
var takoyakiRef = foodMenuRef.doc("Takoyaki");

// Reference the "TakoyakiA" collection
var takoyakiARef = takoyakiRef.collection("TakoyakiA");

takoyakiARef.get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    // Get the data from each document in the collection
    var data = doc.data();

    // Get the array of data from each document
    var takoyakiArray = data.array;

    // Get the element where you want to display the data
    var element = document.getElementById("takoyaki-data");

    var takoyakiName = takoyakiArray[0];

    var priceQuantity = takoyakiArray[1, 2];

    
    // Append the data from the array to the element
    element.innerHTML += takoyakiName + " " + priceQuantity[1]+ " " + priceQuantity[2] + "<br>";
  });
}).catch(function(error) {
  // There was an error getting the data
  console.log("Error getting documents:", error);
});
// const docRef = doc(dbFirestore, "Food Menu", "Takoyaki");
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // doc.data() will be undefined in this case
//   console.log("No such document!");
//}

// document.getElementById('add').addEventListener('click', function() {

