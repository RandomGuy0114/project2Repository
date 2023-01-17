let db = firebase.firestore();
let ordersRef = db.collection("Orders").doc("orderId");
let orderTicketRef = ordersRef.collection("OrderTicket");
// let idUser = db.collection("userData").user.uid("userID")

// Get a reference to the "Proceed" button
let proceedBtn = document.getElementById("proceed-button");
// checking if user is signed in
firebase.auth().onAuthStateChanged(function(user){
  if (user) {
    // User is signed in and verified
    let userName = user.displayName;
    let userEmail = user.email;
    let userId = user.uid;
    console.log("User is signed in and verified: ", userName, userEmail, userId);
    // Add the user's name, email, and ID to the order data
    // before adding it to the "Orders" collection
  
    proceedBtn.addEventListener("click", function () {
    let isNumber = /^\d+$/;
    let isLetters = /^[A-Za-z]+$/;
    let isOneSpace = /^[A-Za-z]+\s[A-Za-z]+$/;
      // Get the data from the form inputs
  let houseno = document.getElementById("houseno").value;
  let street = document.getElementById("street").value;
  let barangay = document.getElementById("barangay").value;
  let city = document.getElementById("city").value;
  let landmark = document.getElementById("landmark").value;
  let contact = document.getElementById("contact").value;
  let paymentMethod = document.querySelector(
    'input[name="flexRadioDefault"]:checked'
  ).value;
  let specialRequest = document.getElementById("specialRequest").value;
  let totalInput = document.getElementById("totalDiv").innerText;
  let order = document.getElementById("user_Checkout").innerText;
  
  // check if may laman ung contact
  if (
    !contact ||
    !houseno ||
    !street ||
    !barangay ||
    !city ||
    !landmark ||
    !specialRequest ||
    !paymentMethod
  ) {
    $(".alert-danger").show();
    setTimeout(function () {
      $(".alert-danger").hide();
    }, 3000);
  } else {
    let barangay = document.getElementById("barangay").value;
    if (!isLetters.test(barangay) && !isOneSpace.test(barangay)) {
      $('#incBarangay').show();
      setTimeout(function(){
        $('#incBarangay').hide();
      }, 3000);
      return;
    }
    let city = document.getElementById("city").value;
    if (!isLetters.test(city) && !isOneSpace.test(city)) {
      $('#incCity').show();
      setTimeout(function(){
        $('#incCity').hide();
      }, 3000);
      return;
    }
    let landmark = document.getElementById("landmark").value;
    if (!isLetters.test(landmark) && !isOneSpace.test(landmark)) {
      $('#incLandmark').show();
      setTimeout(function(){
        $('#incLandmark').hide();
      }, 3000);
      return;
    }

    let street = document.getElementById("street").value;
    if (!isLetters.test(street) && !isOneSpace.test(street)) {
      $('#incStreet').show();
      setTimeout(function(){
        $('#incStreet').hide();
      }, 3000);
      return;
    }
    //check kung ang first two letters ay 09 at 11 characters
    if (
      !isNumber.test(contact) ||
      !contact.startsWith("09") ||
      contact.length !== 11
    ) {
      $('#incNumber').show();
      setTimeout(function(){
        $('#incNumber').hide();
      }, 3000);
      return;
        } else {
        // Check if the user is signed in
        firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
        // User is signed in and verified
        let userName = user.displayName;
        let userEmail = user.email;
        let userId = user.uid;
              // Add the user's name, email, and ID to the order data 
      // before adding it to the "Orders" collection
      orderTicketRef
      .add({
        HouseNo: houseno,
        Street: street,
        Barangay: barangay,
        City: city,
        Landmark: landmark,
        Contact: contact,
        Payment: paymentMethod,
        SpecialRequest: specialRequest,
        TotalPrice: totalInput,
        Order: order,
        UserName: userName,
        UserEmail: userEmail,
        UserId: userId,
      })
      .then(function () {
        console.log("Order added with ID: ");
        $("#exampleModalToggle2").modal("show");
        $("#exampleModalToggle").modal("hide");
        setTimeout(function () {
          $("#exampleModalToggle2").hide();
          redirect();
        }, 3000);
      })
      .catch(function (error) {
        console.error("Error adding Order: ", error);
        $("#exampleModalToggle2").modal("hide");
      });
  } else {
    // User is not signed in
    errorNotification("Please login to Continue!");
  }
});
}
}
    });

// Function to display error notification
function errorNotification(message) 
{
// Display the error message
alert(message);
}}})

function redirect() {
  window.location.href = "userDashboard.html";
}

// // Get a reference to the Firestore database
// firebase.initializeApp(firebaseConfig);
// let db = firebase.firestore();
// let ordersRef = db.collection("Orders").doc("orderId");
// let orderTicketRef = ordersRef.collection("OrderTicket");
// // let idUser = db.collection("userData").user.uid("userID")

// // Get a reference to the "Proceed" button
// let proceedBtn = document.getElementById("proceed-button");
// // checking if user is signed in
// firebase.auth().onAuthStateChanged(function(user){
//   if (user) {
//     // User is signed in and verified
//     let userName = user.displayName;
//     let userEmail = user.email;
//     let userId = user.uid;
//     console.log("User is signed in and verified: ", userName, userEmail, userId);
//     // Add the user's name, email, and ID to the order data
//     // before adding it to the "Orders" collection
  
//     proceedBtn.addEventListener("click"), function () {
//     let isNumber = /^\d+$/;
//     let isLetters = /^[A-Za-z]+$/;
//     let isOneSpace = /^[A-Za-z]+\s[A-Za-z]+$/;
//       // Get the data from the form inputs
//   let houseno = document.getElementById("houseno").value;
//   let street = document.getElementById("street").value;
//   let barangay = document.getElementById("barangay").value;
//   let city = document.getElementById("city").value;
//   let landmark = document.getElementById("landmark").value;
//   let contact = document.getElementById("contact").value;
//   let paymentMethod = document.querySelector(
//     'input[name="flexRadioDefault"]:checked'
//   ).value;
//   let specialRequest = document.getElementById("specialRequest").value;
//   let totalInput = document.getElementById("totalDiv").innerText;
//   let order = document.getElementById("user_Checkout").innerText;
  
//   // check if may laman ung contact
//   if (
//     !contact ||
//     !houseno ||
//     !street ||
//     !barangay ||
//     !city ||
//     !landmark ||
//     !specialRequest ||
//     !paymentMethod
//   ) {
//     $(".alert-danger").show();
//     setTimeout(function () {
//       $(".alert-danger").hide();
//     }, 3000);
//   } else {
//     let barangay = document.getElementById("barangay").value;
//     if (!isLetters.test(barangay) && !isOneSpace.test(barangay)) {
//       alert("Barangay: use letters and 1 space only");
//       return;
//     }
//     let city = document.getElementById("city").value;
//     if (!isLetters.test(city) && !isOneSpace.test(city)) {
//       alert("City: use letters and 1 space only");
//       return;
//     }
//     let landmark = document.getElementById("landmark").value;
//     if (!isLetters.test(landmark) && !isOneSpace.test(landmark)) {
//       alert("Landmark: use letters and 1 space only");
//       return;
//     }

//     let street = document.getElementById("street").value;
//     if (!isLetters.test(street) && !isOneSpace.test(street)) {
//       alert("Street: use letters and 1 space only");
//       return;
//     }
//     //check kung ang first two letters ay 09 at 11 characters
//     if (
//       !isNumber.test(contact) ||
//       !contact.startsWith("09") ||
//       contact.length !== 11
//     ) {
//       alert(
//         "Invalid contact number. Please enter a valid 11-digit mobile number starting with 09.");
//         return;
//         } else {
//         // Check if the user is signed in
//         firebase.auth().onAuthStateChanged(function (user) {
//         if (user) {
//         // User is signed in and verified
//         let userName = user.displayName;
//         let userEmail = user.email;
//         let userId = user.uid;
//               // Add the user's name, email, and ID to the order data 
//       // before adding it to the "Orders" collection
//       orderTicketRef
//       .add({
//         HouseNo: houseno,
//         Street: street,
//         Barangay: barangay,
//         City: city,
//         Landmark: landmark,
//         Contact: contact,
//         Payment: paymentMethod,
//         SpecialRequest: specialRequest,
//         TotalPrice: totalInput,
//         Order: order,
//         UserName: userName,
//         UserEmail: userEmail,
//         UserId: userId,
//       })
//       .then(function (docRef) {
//         console.log("Order added with ID: ", docRef.id);
//         let orderNo = "Order No. " + docRef.id;
//         window.location.href = "success.html?orderNo=" + orderNo;
//       })
//       .catch(function (error) {
//         console.error("Error adding order: ", error);
//       });
//   } else {
//     // User is not signed in
//     errorNotification("Please login to Continue!");
//   }
// });
// }
// }
// };

// // Function to display error notification
// function errorNotification(message) 
// {
// // Display the error message
// alert(message);
// }}})
