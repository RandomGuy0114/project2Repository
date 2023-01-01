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

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

var addToCartButton = document.getElementById("add-to-cart-button");
addToCartButton.addEventListener("click", function() {
  db.collection("Food Menu").doc("Takoyaki").get().then(function(doc) {
    if (doc.exists) {
      var data = doc.data();
      var array = data.array;
      updateModal(array[0], array[1], array[2]);
    }
  });

  db.collection("TakoyakiA").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      var data = doc.data();
      var array = data.array;
      updateModal(array[0], array[1], array[2]);
    });
  });
});

function updateModal(name, price, quantity) {
  
}