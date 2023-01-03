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

let totalPrice = 0;

let takoOrigCartButton = document.getElementById("takoOrigbutton");
takoOrigCartButton.addEventListener("click", takoOrigCartModal);

function takoOrigCartModal() {
    db.collection("Food Menu").doc("Takoyaki").get().then(function (doc) {
        if (doc.exists) {
            let data = doc.data();
            let array = data.TakoyakiA;
            updateModalOrig(array[0], array[1], array[2]);
        }
    });
}
function updateModalOrig(name, price, quantity) {
    // Get ele
    const modal = document.getElementById("modal");
    if (modal.innerHTML.indexOf(name) >= 0) {
        return;
      }

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

let takoJalapenoCartButton = document.getElementById("takoJalapenobutton");
takoJalapenoCartButton.addEventListener("click", takoJalapenoCartModal);

function takoJalapenoCartModal() {
    db.collection("Food Menu").doc("Takoyaki").get().then(function (doc) {
        if (doc.exists) {
            let data = doc.data();
            let array = data.TakoyakiB;
            updateModalJalapeno(array[0], array[1], array[2]);
        }
    });
}
function updateModalJalapeno(name, price, quantity) {
    // Get ele
    const modal = document.getElementById("modal");
    if (modal.innerHTML.indexOf(name) >= 0) {
        return;
      }

    // UP
    modal.innerHTML += `

    <div class="col-12 pl-2 pr-4 mb-3">
     
    <img class="mr-3" src="img/menu/2-jalapeno.jpg" style="width: 50; height: 50px; float:left; border-radius:500%;">
    <button class="fa-solid fa-trash" style="border:none; background-color:white; float:right"></button>
    <h4>${name}</h4>
    <h6 style="float:left">$${price}</h6>
    <h6 style="float:right">${quantity}</h6>

    </div>
    `;
  

    modal.style.display = "block";
}





let takoWasabiCartButton = document.getElementById("takoWasabibutton");
takoWasabiCartButton.addEventListener("click", takoWasabiCartModal);
function takoWasabiCartModal() {
    db.collection("Food Menu").doc("Takoyaki").get().then(function (doc) {
        if (doc.exists) {
            let data = doc.data();
            let array = data.TakoyakiD;
            updateModalWasabi(array[0], array[1], array[2]);
        }
    });
}
function updateModalWasabi(name, price, quantity) {
    // Get ele
    const modal = document.getElementById("modal");
    if (modal.innerHTML.indexOf(name) >= 0) {
        return;
      }

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



let takoMentaikoCartButton = document.getElementById("takoMentaikobutton");
takoMentaikoCartButton.addEventListener("click", takoMentaikoCartModal);
function takoMentaikoCartModal() {
    db.collection("Food Menu").doc("Takoyaki").get().then(function (doc) {
        if (doc.exists) {
            let data = doc.data();
            let array = data.TakoyakiE;
            updateMentaiko(array[0], array[1], array[2]);
        }
    });
}
function updateMentaiko(name, price, quantity) {
    // Get ele
    const modal = document.getElementById("modal");
    const inputCounter = document.getElementById("inputCounter");
    const totalPriceElement = modal.querySelector("h6:last-of-type");
    inputCounter.value = parseInt(inputCounter.value) + quantity;
    totalPrice = price * inputCounter.value;
    // Check if item is already in modal
    if (modal.innerHTML.indexOf(name) >= 0) {
      // Update quantity and total price
      let quantityElement = modal.querySelector("h6:first-of-type");
      let priceElement = modal.querySelector("h6:nth-of-type(2)");
      quantityElement.innerHTML = inputCounter.value;
      priceElement.innerHTML = `$${totalPrice}`;
      totalPriceElement.innerHTML = `Total: $${totalPrice}`;
      return;
      }

    // UP
    modal.innerHTML += `

    <div class="col-12 pl-2 pr-4 mb-3">
     
    <img class="mr-3" src="img/menu/1-original.jpg" style="width: 50; height: 50px; float:left; border-radius:500%;">
    <button class="fa-solid fa-trash" style="border:none; background-color:white; float:right"></button>
    <h4>${name}</h4>
    <h6 style="float:left">Quantity: ${inputCounter.value}</h6>
    <h6 style="float:right">Price: $${totalPrice}</h6>
    <h6>Total: $${totalPrice}</h6>


    </div>
    `;
  
    modal.style.display = "block";
}

$(document).ready(function() {
    $('.minus').click(function () {
      updateMentaiko("Mentaiko", 45, -1);
      return false;
    });
    $('.plus').click(function () {
      updateMentaiko("Mentaiko", 45, 1);
      return false;
    });
  });


