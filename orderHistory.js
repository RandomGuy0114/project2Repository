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

// Get a reference to the Firestore database
let db = firebase.firestore();

let ordersRef = db.collection("Orders").doc("orderId");
let orderTicketRef = ordersRef.collection("OrderTicket");
let orderList = document.getElementById("orderlist");

orderTicketRef.onSnapshot(function (snapshot) {
  let changes = snapshot.docChanges();
  changes.forEach(function (change) {
    if (change.type === "added") {
      let orderData = change.doc.data()
      // ChatGPT moments
      let newOrder = document.createElement("div");
      newOrder.classList.add("card", "col-lg-4", "col-md-6", "col-sm-12", "col-xs-12");
      // idisplay ung data sa modal nato
      newOrder.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">Order#: ${change.doc.id}</h5>
          <p class="card-text">Phone#: ${orderData.Contact}</p>
          <p class="card-text">Address: ${orderData.HouseNo} ${orderData.Street}, ${orderData.Barangay}, ${orderData.City}</p>
          <p class="card-text">Landmark: ${orderData.Landmark}</p>
          <p class="card-text">Payment: ${orderData.Payment}</p>
          <p class="card-text">Special Requests: ${orderData.SpecialRequest}</p>
          <p class="card-text">Order: ${orderData.Order}</p>
          <p class="card-text">Total Price: ${orderData.TotalPrice}</p>
        </div>
      `;
      // append pang add
      orderList.appendChild(newOrder);
    }
  });
});




