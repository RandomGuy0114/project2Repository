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

// show - & + buttons after click
//ORIGINAL
var takoOrigbutton = document.getElementById('takoOrigbutton');
var minusOriginal = document.getElementById('minusOriginal');
var plusOriginal = document.getElementById('plusOriginal');

takoOrigbutton.addEventListener('click', function() {
    minusOriginal.style.display = 'inline-block';
    plusOriginal.style.display = 'inline-block';
});
//JALAPENO
var takoJalapenobutton = document.getElementById('takoJalapenobutton');
var minusJalapeno = document.getElementById('minusJalapeno');
var plusJalapeno = document.getElementById('plusJalapeno');

takoJalapenobutton.addEventListener('click', function() {
    minusJalapeno.style.display = 'inline-block';
    plusJalapeno.style.display = 'inline-block';
});
//WASABI
var takoWasabibutton = document.getElementById('takoWasabibutton');
var minusWasabi = document.getElementById('minusWasabi');
var plusWasabi = document.getElementById('plusWasabi');

takoWasabibutton.addEventListener('click', function() {
    minusWasabi.style.display = 'inline-block';
  plusWasabi.style.display = 'inline-block';
});
//MENTAIKO
var takoMentaikobutton = document.getElementById('takoMentaikobutton');
var minusMentaiko = document.getElementById('minusMentaiko');
var plusMentaiko = document.getElementById('plusMentaiko');

takoMentaikobutton.addEventListener('click', function() {
  minusMentaiko.style.display = 'inline-block';
  plusMentaiko.style.display = 'inline-block';
});

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

    // Get a list of all the trash button elements
    const trashButtons = modal.querySelectorAll('.fa-trash');
  
    // Add a click event listener to each trash button
    trashButtons.forEach(function(trashButton) {
      trashButton.addEventListener('click', function() {
        inputCounter.value = 0;
        // Remove the parent element of the trash button (which is the item)
        this.parentElement.remove();
      });
    });
  
    modal.style.display = "block";
}
document.getElementById('minusOriginal').addEventListener('click', function() {
    // imbis na naka hard code dito na lng mag geget ng current quantity at price
    let quantityElement = document.getElementById('inputCounter');
    let quantity = parseInt(quantityElement.value, 10);
    let price = 45;
  
    // pang decrement
    quantity--;
    let totalPrice = quantity * price;
    document.getElementById('totalPrice').innerHTML = `Total: $${totalPrice}`;
    
    // update ung quantity
    quantityElement.value = quantity;
  });
  
  document.getElementById('plusOriginal').addEventListener('click', function() {
    // imbis na naka hard code dito na lng mag geget ng current quantity at price
    let quantityElement = document.getElementById('inputCounter');
    let quantity = parseInt(quantityElement.value, 10);
    let price = 45;
  
    // pang increment
    quantity++;
    let totalPrice = quantity * price;
    document.getElementById('totalPrice').innerHTML = `Total: $${totalPrice}`;
    
    // Update ung quantity
    quantityElement.value = quantity;
  });


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
     
    <img class="mr-3" src="img/menu/2-jalapeno.jpg" style="width: 50; height: 50px; float:left; border-radius:500%;">
    <button class="fa-solid fa-trash" style="border:none; background-color:white; float:right"></button>
    <h4>${name}</h4>
    <h6 style="float:left">Quantity: ${inputCounter.value}</h6>
    <h6 style="float:right">Price: $${totalPrice}</h6>
    <h6>Total: $${totalPrice}</h6>


    </div>
    `;

    // Get a list of all the trash button elements
    const trashButtons = modal.querySelectorAll('.fa-trash');
  
    // Add a click event listener to each trash button
    trashButtons.forEach(function(trashButton) {
      trashButton.addEventListener('click', function() {
        inputCounter.value = 0;
        // Remove the parent element of the trash button (which is the item)
        this.parentElement.remove();
      });
    });
  
    modal.style.display = "block";
}
document.getElementById('minusJalapeno').addEventListener('click', function() {
    // imbis na naka hard code dito na lng mag geget ng current quantity at price
    let quantityElement = document.getElementById('inputCounter');
    let quantity = parseInt(quantityElement.value, 10);
    let price = 45;
  
    // pang decrement
    quantity--;
    let totalPrice = quantity * price;
    document.getElementById('totalPrice').innerHTML = `Total: $${totalPrice}`;
    
    // update ung quantity
    quantityElement.value = quantity;
  });
  
  document.getElementById('plusJalapeno').addEventListener('click', function() {
    // imbis na naka hard code dito na lng mag geget ng current quantity at price
    let quantityElement = document.getElementById('inputCounter');
    let quantity = parseInt(quantityElement.value, 10);
    let price = 45;
  
    // pang increment
    quantity++;
    let totalPrice = quantity * price;
    document.getElementById('totalPrice').innerHTML = `Total: $${totalPrice}`;
    
    // Update ung quantity
    quantityElement.value = quantity;
  });





let takoWasabiCartButton = document.getElementById("takoWasabibutton");
takoWasabiCartButton.addEventListener("click", takoWasabiCartModal);
function takoWasabiCartModal() {
    db.collection("Food Menu").doc("Takoyaki").get().then(function (doc) {
        if (doc.exists) {
            let data = doc.data();
            let array = data.TakoyakiC;
            updateModalWasabi(array[0], array[1], array[2]);
        }
    });
}
function updateModalWasabi(name, price, quantity) {
    // Get ele
    const modal = document.getElementById("modal");
    const inputCounter = document.getElementById("inputCounterWasabi");
    const totalPriceElement = modal.querySelector("h6:last-of-type");
    inputCounter.value = parseInt(inputCounter.value) + quantity;
    totalPrice = price * inputCounter.value;
    // Check if item is already in modal
    if (modal.innerHTML.indexOf(name) >= 0) {
      // Update quantity and total price
      let quantityElement = modal.querySelector("#modalWasabi h6:first-of-type");
      let priceElement = modal.querySelector("#modalWasabi h6:nth-of-type(2)");
      quantityElement.innerHTML = inputCounter.value;
      priceElement.innerHTML = `$${totalPrice}`;
      totalPriceElement.innerHTML = `Total: $${totalPrice}`;
      return;
      }

    // UP
    modal.innerHTML += `

    <div id="modalWasabi" class="col-12 pl-2 pr-4 mb-3">
     
    <img class="mr-3" src="img/menu/4-wasabi.jpg" style="width: 50; height: 50px; float:left; border-radius:500%;">
    <button class="fa-solid fa-trash" style="border:none; background-color:white; float:right"></button>
    <h4>${name}</h4>
    <h6 style="float:left">Quantity: ${inputCounter.value}</h6>
    <h6 style="float:right">Price: $${totalPrice}</h6>
    <h6>Total: $${totalPrice}</h6>


    </div>
    `;

    document.getElementById('minusWasabi').addEventListener('click', function() {
      // imbis na naka hard code dito na lng mag geget ng current quantity at price
      let quantityElement = document.getElementById('inputCounterWasabi');
      let quantity = parseInt(quantityElement.value, 10);
      let price = 45;
    
      // pang decrement
      quantity--;
      let totalPrice = quantity * price;
      document.getElementById('totalPrice').innerHTML = `Total: $${totalPrice}`;
      
      // update ung quantity
      quantityElement.value = quantity;
    });
    
    document.getElementById('plusWasabi').addEventListener('click', function() {
      // imbis na naka hard code dito na lng mag geget ng current quantity at price
      let quantityElement = document.getElementById('inputCounterWasabi');
      let quantity = parseInt(quantityElement.value, 10);
      let price = 45;
    
      // pang increment
      quantity += 1; // increment by 1 instead of adding 1
      let totalPrice = quantity * price;
      document.getElementById('totalPrice').innerHTML = `Total: $${totalPrice}`;
    
      // Update ung quantity
      quantityElement.value = quantity;
    });
    
    // Get a list of all the trash button elements
    const trashButtons = modal.querySelectorAll('.fa-trash');
  
    // Add a click event listener to each trash button
    trashButtons.forEach(function(trashButton) {
      trashButton.addEventListener('click', function() {
        inputCounter.value = 0;
        // Remove the parent element of the trash button (which is the item)
        this.parentElement.remove();
      });
    });
  
    modal.style.display = "block";
}





let takoMentaikoCartButton = document.getElementById("takoMentaikobutton");
takoMentaikoCartButton.addEventListener("click", takoMentaikoCartModal);
function takoMentaikoCartModal() {
    db.collection("Food Menu").doc("Takoyaki").get().then(function (doc) {
        if (doc.exists) {
            let data = doc.data();
            let array = data.TakoyakiD;
            updateModalMentaiko(array[0], array[1], array[2]);
        }
    });

  
}
function updateModalMentaiko(name, price, quantity) {
    // Get ele
    const modal = document.getElementById("modal");
    const inputCounter = document.getElementById("inputCounterMentaiko");
    const totalPriceElement = modal.querySelector("h6:last-of-type");
    inputCounter.value = parseInt(inputCounter.value) + quantity;
    totalPrice = price * inputCounter.value;
    // Check if item is already in modal
    if (modal.innerHTML.indexOf(name) >= 0) {
      // Update quantity and total price
      let quantityElement = modal.querySelector("#modalMentaiko h6:first-of-type");
      let priceElement = modal.querySelector("#modalMentaiko h6:nth-of-type(2)");
      quantityElement.innerHTML = inputCounter.value;
      priceElement.innerHTML = `$${totalPrice}`;
      totalPriceElement.innerHTML = `Total: $${totalPrice}`;
      return;
      }

    // UP
    modal.innerHTML += `

    <div id="modalMentaiko" class="col-12 pl-2 pr-4 mb-3">
     
    <img class="mr-3" src="img/menu/5-mentaiko.jpg" style="width: 50; height: 50px; float:left; border-radius:500%;">
    <button class="fa-solid fa-trash" style="border:none; background-color:white; float:right"></button>
    <h4>${name}</h4>
    <h6 style="float:left">Quantity: ${inputCounter.value}</h6>
    <h6 style="float:right">Price: $${totalPrice}</h6>
    <h6>Total: $${totalPrice}</h6>

    </div>
    `;
    document.getElementById('minusMentaiko').addEventListener('click', function() {
      // imbis na naka hard code dito na lng mag geget ng current quantity at price
      let quantityElement = document.getElementById('inputCounterMentaiko');
      let quantity = parseInt(quantityElement.value, 10);
      let price = 45;
    
      // pang decrement
      quantity--;
      let totalPrice = quantity * price;
      document.getElementById('totalPrice').innerHTML = `Total: $${totalPrice}`;
      
      // update ung quantity
      quantityElement.value = quantity;
    });
    
    document.getElementById('plusMentaiko').addEventListener('click', function() {
      // imbis na naka hard code dito na lng mag geget ng current quantity at price
      let quantityElement = document.getElementById('inputCounterMentaiko');
      let quantity = parseInt(quantityElement.value, 10);
      let price = 45;
    
      // pang increment
      quantity+=1;
      let totalPrice = quantity * price;
      document.getElementById('totalPrice').innerHTML = `Total: $${totalPrice}`;
      
      // Update ung quantity
      quantityElement.value = quantity;
    });

    // Get a list of all the trash button elements
    const trashButtons = modal.querySelectorAll('.fa-trash');
  
    // Add a click event listener to each trash button
    trashButtons.forEach(function(trashButton) {
      trashButton.addEventListener('click', function() {
        inputCounter.value = 0;
        // Remove the parent element of the trash button (which is the item)
        this.parentElement.remove();
      });
    });
  
    modal.style.display = "block";
}




  


