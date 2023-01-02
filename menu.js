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

<<<<<<< HEAD
let takoOrigCartButton = document.getElementById("takoOrigbutton");
takoOrigCartButton.addEventListener("click", takoOrigCartModal);

function takoOrigCartModal() {
    db.collection("Food Menu").doc("Takoyaki").get().then(function (doc) {
        if (doc.exists) {
            let data = doc.data();
            let array = data.TakoyakiA;
            updateModal(array[0], array[1], array[2]);
        }
    });
}

let takoJalapenoCartButton = document.getElementById("takoJalapenobutton");
takoJalapenoCartButton.addEventListener("click", takoJalapenoCartModal);

function takoJalapenoCartModal() {
    db.collection("Food Menu").doc("Takoyaki").get().then(function (doc) {
        if (doc.exists) {
            let data = doc.data();
            let array = data.TakoyakiB;
            updateModal(array[0], array[1], array[2]);
        }
    });
=======

const buttons = document.querySelectorAll("#add-to-cart-button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", updateCartModal);
}

function updateCartModal() {
  db.collection("Food Menu").doc("Takoyaki").get().then(function (doc) {
    if (doc.exists) {
      var data = doc.data();
      var array = data.TakoyakiA;
      updateModal(array[0], array[1], array[2]);
    }
  });
>>>>>>> 1191785026a0c9262bc8158e27c58eab73f706de
}


function updateModal(name, price, quantity) {
    // Get ele
    const modal = document.getElementById("modal");

    // UP
    modal.innerHTML += `

    <div class="col-12 pl-2 pr-4 mb-3">
     
    <img class="mr-3" src="img/menu/1-original.jpg" style="width: 50; height: 50px; float:left; border-radius:500%;">
    <button class="fa-solid fa-trash" style="border:none; background-color:white; float:right"></button>
    <h4>${name}</h4>
    <h6 style="float:left">$${price}</h6>
    <h6 style="float:right">${quantity}</h6>

    </div>
    `;
  

    modal.style.display = "block";
}

// $(this).remove();