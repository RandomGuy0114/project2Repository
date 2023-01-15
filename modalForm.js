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

// Get a reference to the Firestore database
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

// Get a reference to the "Proceed" button
let proceedBtn = document.getElementById("proceed-button");

// Add an event listener to the button
proceedBtn.addEventListener("click", function () {
  let isNumber = /^\d+$/;
  let isLetters = /^[A-Za-z]+$/;

  // Get the data from the form inputs
  let houseno = document.getElementById("houseno").value;
  let street = document.getElementById("street").value;
  let barangay = document.getElementById("barangay").value;
  let city = document.getElementById("city").value;
  let landmark = document.getElementById("landmark").value;
  let contact = document.getElementById("contact").value;
  let specialRequest = document.getElementById("specialRequest").value;
  let totalInput = document.getElementById("totalDiv").innerText;
  let user = document.getElementById("user_Checkout").innerText;

  // check if may laman ung contact
  if (!contact || !houseno || !street || !barangay || !city || !landmark || !specialRequest) {
    $('.alert-danger').show();
    setTimeout(function () {
      $('.alert-danger').hide();
    }, 3000);
  }
  else {

    let barangay = document.getElementById("barangay").value;
    if (!isLetters.test(barangay)) {
      alert("Barangay: use letters only");
      return;
    }
    let city = document.getElementById("city").value;
    if (!isLetters.test(city)) {
      alert("City: use letters only");
      return;
    }   
    let landmark = document.getElementById("landmark").value;
    if (!isLetters.test(landmark)) {
      alert("Landmark: use letters only");
      return;
    }
    //check kung ang first two letters ay 09 at 11 characters
    if (!isNumber.test(contact) || !contact.startsWith("09") || contact.length !== 11) {
      alert("Invalid contact number. Please enter a valid 11-digit mobile number starting with 09.");
      return;
    }
    else {
      // Add the data to the "Orders" collection
      db.collection("Orders").add({
        houseno: houseno,
        street: street,
        barangay: barangay,
        city: city,
        landmark: landmark,
        contact: contact,
        specialRequest: specialRequest,
        totalInput: totalInput,
        user: user,
      })
        .then(function (docRef) {
          console.log("Order added with ID: ", docRef.id);
          $("#exampleModalToggle2").modal("show");
          setTimeout(function () {
            $("#exampleModalToggle2").hide();
            redirect();
          }, 3000);
        })
        .catch(function (error) {
          console.error("Error adding Order: ", error);
          $("#exampleModalToggle2").modal("hide");
        });
    }
  }
});

function redirect() {
  window.location.href = "userDashboard.html";
}
