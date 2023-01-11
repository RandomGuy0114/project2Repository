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



let mentaikototalPrice = 0;
let wasabitotalPrice = 0;
let fulltotalPrice = 0;

// show - & + buttons after click
//ORIGINAL
var takoOrigbutton = document.getElementById('takoOrigbutton');
var minusOriginal = document.getElementById('minusOrig');
var plusOriginal = document.getElementById('plusOrig');

takoOrigbutton.addEventListener('click', function () {
  minusOriginal.style.display = 'inline-block';
  plusOriginal.style.display = 'inline-block';
});
//JALAPENO
var takoJalapenobutton = document.getElementById('takoJalapenobutton');
var minusJalapeno = document.getElementById('minusJalapeno');
var plusJalapeno = document.getElementById('plusJalapeno');

takoJalapenobutton.addEventListener('click', function () {
  minusJalapeno.style.display = 'inline-block';
  plusJalapeno.style.display = 'inline-block';
});
//WASABI
var takoWasabibutton = document.getElementById('takoWasabibutton');
var minusWasabi = document.getElementById('minusWasabi');
var plusWasabi = document.getElementById('plusWasabi');

takoWasabibutton.addEventListener('click', function () {
  minusWasabi.style.display = 'inline-block';
  plusWasabi.style.display = 'inline-block';
});
//MENTAIKO
var takoMentaikobutton = document.getElementById('takoMentaikobutton');
var minusMentaiko = document.getElementById('minusMentaiko');
var plusMentaiko = document.getElementById('plusMentaiko');

takoMentaikobutton.addEventListener('click', function () {
  minusMentaiko.style.display = 'inline-block';
  plusMentaiko.style.display = 'inline-block';
});




//SALMON
var sushiSalmonButton = document.getElementById('sushiSalmonButton');
var minusSalmon = document.getElementById('minusSalmon');
var plusSalmon = document.getElementById('plusSalmon');

sushiSalmonButton.addEventListener('click', function () {
  minusSalmon.style.display = 'inline-block';
  plusSalmon.style.display = 'inline-block';
});

//SMOKED SALMON
var sushiSmokedSalmonButton = document.getElementById('sushiSmokedSalmonButton');
var minusSmokedSalmon = document.getElementById('minusSmokedSalmon');
var plusSmokedSalmon = document.getElementById('plusSmokedSalmon');

sushiSmokedSalmonButton.addEventListener('click', function () {
  minusSmokedSalmon.style.display = 'inline-block';
  plusSmokedSalmon.style.display = 'inline-block';
});

//PALEO
var sushiPaleoButton = document.getElementById('sushiPaleoButton');
var minusPaleo = document.getElementById('minusPaleo');
var plusPaleo = document.getElementById('plusPaleo');

sushiPaleoButton.addEventListener('click', function () {
  minusPaleo.style.display = 'inline-block';
  plusPaleo.style.display = 'inline-block';
});


//Tantan
var ramenTantanbutton = document.getElementById('ramenTantanbutton');
var minusTantan = document.getElementById('minusTantan');
var plusTantan = document.getElementById('plusTantan');

ramenTantanbutton.addEventListener('click', function () {
  minusTantan.style.display = 'inline-block';
  plusTantan.style.display = 'inline-block';
});

//Nikutama
var ramenNikutamabutton = document.getElementById('ramenNikutamabutton');
var minusNikutama = document.getElementById('minusNikutama');
var plusNikutama = document.getElementById('plusNikutama');

ramenNikutamabutton.addEventListener('click', function () {
  minusNikutama.style.display = 'inline-block';
  plusNikutama.style.display = 'inline-block';
});

//Tonkotsu
var ramenTonkotsubutton = document.getElementById('ramenTonkotsubutton');
var minusTonkotsu = document.getElementById('minusTonkotsu');
var plusTonkotsu = document.getElementById('plusTonkotsu');

ramenTonkotsubutton.addEventListener('click', function () {
  minusTonkotsu.style.display = 'inline-block';
  plusTonkotsu.style.display = 'inline-block';
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
  const inputCounter = document.getElementById("inputCounterOrig");
  const totalPriceElement = modal.querySelector("h6:last-of-type");
  inputCounter.value = parseInt(inputCounter.value) + quantity;
  totalPrice = price * inputCounter.value;
  // Check if item is already in modal
  if (modal.innerHTML.indexOf(name) >= 0) {
    // Update quantity and total price
    let quantityElement = modal.querySelector("#modalOrig h6:first-of-type");
    let priceElement = modal.querySelector("#modalOrig h6:nth-of-type(2)");
    quantityElement.innerHTML = inputCounter.value;
    priceElement.innerHTML = `$${totalPrice}`;
    totalPriceElement.innerHTML = `Total: $${totalPrice}`;
    return;
  }

  // UP
  modal.innerHTML += `

    <div id="modalOrig" class="col-12 pl-2 pr-4 mb-3">
     
    <img class="mr-3" src="img/menu/1-original.jpg" style="width: 50px; height: 50px; float:left; border-radius:500%;">
    <button class="fa-solid fa-trash" style="border:none; background-color:white; float:right"></button>
    <h4 style="font-size:medium;">${name}</h4>
    <h6 style="float:left;">${inputCounterOrig.value}</h6>
    <p style="float:right; margin-bottom:0rem; padding-top:0rem;">Price: $30</p><br>

    <br>
    </div>
    `;
  document.getElementById('minusOrig').addEventListener('click', function () {
    // imbis na naka hard code dito na lng mag geget ng current quantity at price
    let quantityElement = document.getElementById('inputCounterOrig');
    let quantity = parseInt(quantityElement.value, 10);
    let price = 30;

    // pang decrement
    quantity--;
    let totalPrice = quantity * price;
    document.getElementById('totalPrice').innerHTML = `Total: $${totalPrice}`;

    // update ung quantity
    quantityElement.value = quantity;
  });

  document.getElementById('plusOrig').addEventListener('click', function () {
    // imbis na naka hard code dito na lng mag geget ng current quantity at price
    let quantityElement = document.getElementById('inputCounterOrig');
    let quantity = parseInt(quantityElement.value, 10);
    let price = 30;

    // pang increment
    quantity += 1;
    let totalPrice = quantity * price;
    document.getElementById('totalPrice').innerHTML = `Total: $${totalPrice}`;

    // Update ung quantity
    quantityElement.value = quantity;
  });

  // Get a list of all the trash button elements
  const trashButtons = modal.querySelectorAll('.fa-trash');

  // Add a click event listener to each trash button
  trashButtons.forEach(function (trashButton) {
    trashButton.addEventListener('click', function () {
      inputCounterOrig.value = 0;
      // Remove the parent element of the trash button (which is the item)
      this.parentElement.remove();
    });
  });

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
  const inputCounter = document.getElementById("inputCounterJalapeno");
  const totalPriceElement = modal.querySelector("h6:last-of-type");
  inputCounter.value = parseInt(inputCounter.value) + quantity;
  totalPrice = price * inputCounter.value;
  // Check if item is already in modal
  if (modal.innerHTML.indexOf(name) >= 0) {
    // Update quantity and total price
    let quantityElement = modal.querySelector("#modalJalapeno h6:first-of-type");
    let priceElement = modal.querySelector("#modalJalapeno h6:nth-of-type(2)");
    quantityElement.innerHTML = inputCounter.value;
    priceElement.innerHTML = `$${totalPrice}`;
    totalPriceElement.innerHTML = `Total: $${totalPrice}`;
    return;
  }

  // UP
  modal.innerHTML += `
  
    <div id="modalJalapeno" class="col-12 pl-2 pr-4 mb-3">
     
    <img class="mr-3" src="img/menu/2-jalapeno.jpg" style="width: 50px; height: 50px; float:left; border-radius:500%;">
    <button class="fa-solid fa-trash" style="border:none; background-color:white; float:right"></button>
    <h4 style="font-size:medium;">${name}</h4>
    <h6 style="float:left;">${inputCounterJalapeno.value}</h6>
    <p style="float:right; margin-bottom:0rem; padding-top:0rem;">Price: $35</p><br>

    <br>
    </div>

      `;
  document.getElementById('minusJalapeno').addEventListener('click', function () {
    // imbis na naka hard code dito na lng mag geget ng current quantity at price
    let quantityElement = document.getElementById('inputCounterJalapeno');
    let quantity = parseInt(quantityElement.value, 10);
    let price = 35;

    // pang decrement
    quantity--;
    let totalPrice = quantity * price;
    document.getElementById('totalPrice').innerHTML = `Total: $${totalPrice}`;

    // update ung quantity
    quantityElement.value = quantity;
  });

  document.getElementById('plusJalapeno').addEventListener('click', function () {
    // imbis na naka hard code dito na lng mag geget ng current quantity at price
    let quantityElement = document.getElementById('inputCounterJalapeno');
    let quantity = parseInt(quantityElement.value, 10);
    let price = 35;

    // pang increment
    quantity += 1;
    let totalPrice = quantity * price;
    document.getElementById('totalPrice').innerHTML = `Total: $${totalPrice}`;

    // Update ung quantity
    quantityElement.value = quantity;
  });

  // Get a list of all the trash button elements
  const trashButtons = modal.querySelectorAll('.fa-trash');

  // Add a click event listener to each trash button
  trashButtons.forEach(function (trashButton) {
    trashButton.addEventListener('click', function () {
      inputCounterJalapeno.value = 0;
      // Remove the parent element of the trash button (which is the item)
      this.parentElement.remove();
    });
  });

  modal.style.display = "block";
}

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
  inputCounter.value = parseInt(inputCounter.value) + quantity;
  wasabitotalPrice = price * inputCounter.value;
  fulltotalPrice = mentaikototalPrice + wasabitotalPrice;

  // Check if item is already in modal
  if (modal.innerHTML.indexOf(name) >= 0) {
    // Update quantity and total price
    let quantityElement = modal.querySelector("#modalWasabi h6:first-of-type");
    quantityElement.innerHTML = inputCounter.value;
    document.getElementById("fulltotalPrice").innerHTML = `Total: P${fulltotalPrice}`;
    return;
  }

  // UP
  modal.innerHTML += `

    <div id="modalWasabi" class="col-12 pl-2 pr-4 mb-3">
     
    <img class="mr-3" src="img/menu/4-wasabi.jpg" style="width: 50px; height: 50px; float:left; border-radius:500%;">
    <button class="fa-solid fa-trash" style="border:none; background-color:white; float:right"></button>
    <h4 style="font-size:medium;">${name}</h4>
    <h6 id="wasabiQuantity" style="float:left;">Qty: ${inputCounter.value}</h6>
    <p id="wasabitotalPrice" style="float:right; margin-bottom:0rem; padding-top:0rem;">Price: ${wasabitotalPrice}</p><br>

    <br>
    </div>
    `;

  document.getElementById('minusWasabi').addEventListener('click', function () {
    // imbis na naka hard code dito na lng mag geget ng current quantity at price
    let quantityElement = document.getElementById('inputCounterWasabi');
    let quantity = parseInt(quantityElement.value, 10);
    let price = 35;

    // pang decrement
    quantity--;
    let wasabitotalPrice = quantity * price;
    fulltotalPrice = mentaikototalPrice + wasabitotalPrice;
    document.getElementById('wasabiQuantity').innerHTML = `Qty: ${inputCounter.value}`
    document.getElementById('wasabitotalPrice').innerHTML = `Price: $${wasabitotalPrice}`;
    document.getElementById("fulltotalPrice").innerHTML = `Total: P${fulltotalPrice}`;
    // update ung quantity
    quantityElement.value = quantity;
  });

  document.getElementById('plusWasabi').addEventListener('click', function () {
    // imbis na naka hard code dito na lng mag geget ng current quantity at price
    let quantityElement = document.getElementById('inputCounterWasabi');
    let quantity = parseInt(quantityElement.value, 10);
    let price = 35;

    // pang increment
    quantity += 1; // increment by 1 instead of adding 1
    let wasabitotalPrice = quantity * price;
    fulltotalPrice = mentaikototalPrice + wasabitotalPrice;
    document.getElementById('wasabiQuantity').innerHTML = `Qty: ${inputCounter.value}`
    document.getElementById('wasabitotalPrice').innerHTML = `Price: $${wasabitotalPrice}`;
    document.getElementById("fulltotalPrice").innerHTML = `Total: P${fulltotalPrice}`;

    // Update ung quantity
    quantityElement.value = quantity;
  });

  // Get a list of all the trash button elements
  const trashButtons = modal.querySelectorAll('.fa-trash');

  // Add a click event listener to each trash button
  trashButtons.forEach(function (trashButton) {
    trashButton.addEventListener('click', function () {
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
  inputCounter.value = parseInt(inputCounter.value) + quantity;
  mentaikototalPrice = price * inputCounter.value;
  fulltotalPrice = mentaikototalPrice + wasabitotalPrice;
  // Check if item is already in modal
  if (modal.innerHTML.indexOf(name) >= 0) {
    // Update quantity and total price
    let quantityElement = modal.querySelector("#modalMentaiko h6:first-of-type");
    quantityElement.innerHTML = inputCounter.value;
    document.getElementById("fulltotalPrice").innerHTML = `Total: P${fulltotalPrice}`;
    return;
  }

  // UP
  modal.innerHTML += `
    <div id="modalMentaiko" class="col-12 pl-2 pr-4 mb-3">
     
    <img class="mr-3" src="img/menu/5-mentaiko.jpg" style="width: 50px; height: 50px; float:left; border-radius:500%;">
    <button class="fa-solid fa-trash" style="border:none; background-color:white; float:right"></button>
    <h4 style="font-size:medium;">${name}</h4>
    <h6 id="mentaikoQuantity" style="float:left;">Qty: ${inputCounter.value}</h6>
    <p id="mentaikototalPrice" style="float:right; margin-bottom:0rem; padding-top:0rem;">Price: ${mentaikototalPrice}</p><br>

    <br>
    </div>
    `;
  // <h6 style="float:left">Price: $${totalPrice}</h6>
  document.getElementById('minusMentaiko').addEventListener('click', function () {
    // imbis na naka hard code dito na lng mag geget ng current quantity at price
    let quantityElement = document.getElementById('inputCounterMentaiko');
    let quantity = parseInt(quantityElement.value, 10);
    let price = 45;

    // pang decrement
    quantity--;
    let mentaikototalPrice = quantity * price;
    fulltotalPrice = mentaikototalPrice + wasabitotalPrice;
    document.getElementById('mentaikoQuantity').innerHTML = `Qty: ${inputCounter.value}`
    document.getElementById('mentaikototalPrice').innerHTML = `Price: $${mentaikototalPrice}`;
    document.getElementById("fulltotalPrice").innerHTML = `Total: P${fulltotalPrice}`;

    // update ung quantity
    quantityElement.value = quantity;
  });

  document.getElementById('plusMentaiko').addEventListener('click', function () {
    // imbis na naka hard code dito na lng mag geget ng current quantity at price
    let quantityElement = document.getElementById('inputCounterMentaiko');
    let quantity = parseInt(quantityElement.value, 10);
    let price = 45;

    // pang increment
    quantity += 1;
    let mentaikototalPrice = quantity * price;
    fulltotalPrice = mentaikototalPrice + wasabitotalPrice;
    document.getElementById('mentaikoQuantity').innerHTML = `Qty: ${inputCounter.value}`
    document.getElementById('mentaikototalPrice').innerHTML = `Price: $${mentaikototalPrice}`;
    document.getElementById("fulltotalPrice").innerHTML = `Total: P${fulltotalPrice}`;


    // Update ung quantity
    quantityElement.value = quantity;
  });

  // Get a list of all the trash button elements
  const trashButtons = modal.querySelectorAll('.fa-trash');

  // Add a click event listener to each trash button
  trashButtons.forEach(function (trashButton) {
    trashButton.addEventListener('click', function () {
      inputCounter.value = 0;
      // Remove the parent element of the trash button (which is the item)
      this.parentElement.remove();
    });
  });
  modal.style.display = "block";
}


//SUSHI
//SALMON

let sushiSalmonCartButton = document.getElementById("sushiSalmonButton");
sushiSalmonCartButton.addEventListener("click", sushiSalmonCartModal);
function sushiSalmonCartModal() {
  db.collection("Food Menu").doc("Sushi").get().then(function (doc) {
    if (doc.exists) {
      let data = doc.data();
      let array = data.SushiA;
      updateModalSalmon(array[0], array[1], array[2]);
    }
  });


}
function updateModalSalmon(name, price, quantity) {
  // Get ele
  const modal = document.getElementById("modal");
  const inputCounter = document.getElementById("inputCounterSalmon");
  const totalPriceElement = modal.querySelector("h6:last-of-type");
  inputCounter.value = parseInt(inputCounter.value) + quantity;
  totalPrice = price * inputCounter.value;
  // Check if item is already in modal
  if (modal.innerHTML.indexOf(name) >= 0) {
    // Update quantity and total price
    let quantityElement = modal.querySelector("#modalSalmon h6:first-of-type");
    let priceElement = modal.querySelector("#modalSalmon h6:nth-of-type(2)");
    quantityElement.innerHTML = inputCounter.value;
    priceElement.innerHTML = `$${totalPrice}`;
    totalPriceElement.innerHTML = `<br> Price: $${totalPrice}`;
    return;
  }

  // UP
  modal.innerHTML += `

    <div id="modalSalmon" class="col-12 pl-2 pr-4 mb-3">
     
    <img class="mr-3" src="/img/menu/1-salmon.jpg" style="width: 50px; height: 50px; float:left; border-radius:500%;">
    <button class="fa-solid fa-trash" style="border:none; background-color:white; float:right"></button>
    <h4 style="font-size:medium;">${name}</h4>
    <h6 style="float:left;">${inputCounterSalmon.value}</h6>
    <p style="float:right; margin-bottom:0rem; padding-top:0rem;">Price: $60</p><br>

    <br>
    </div>
    `;
  // <h6 style="float:left">Price: $${totalPrice}</h6>
  document.getElementById('minusSalmon').addEventListener('click', function () {
    // imbis na naka hard code dito na lng mag geget ng current quantity at price
    let quantityElement = document.getElementById('inputCounterSalmon');
    let quantity = parseInt(quantityElement.value, 10);
    let price = 60;

    // pang decrement
    quantity--;
    let totalPrice = quantity * price;
    document.getElementById('totalPrice').innerHTML = `Price: $${totalPrice}`;

    // update ung quantity
    quantityElement.value = quantity;
  });

  document.getElementById('plusSalmon').addEventListener('click', function () {
    // imbis na naka hard code dito na lng mag geget ng current quantity at price
    let quantityElement = document.getElementById('inputCounterSalmon');
    let quantity = parseInt(quantityElement.value, 10);
    let price = 45;

    // pang increment
    quantity += 1;
    let totalPrice = quantity * price;
    document.getElementById('totalPrice').innerHTML = `Price: $${totalPrice}`;

    // Update ung quantity
    quantityElement.value = quantity;
  });

  // Get a list of all the trash button elements
  const trashButtons = modal.querySelectorAll('.fa-trash');

  // Add a click event listener to each trash button
  trashButtons.forEach(function (trashButton) {
    trashButton.addEventListener('click', function () {
      inputCounterSalmon.value = 0;
      // Remove the parent element of the trash button (which is the item)
      this.parentElement.remove();
    });
  });

  modal.style.display = "block";
}


//SMOKED SALMON

let SmokedSalmonCartButton = document.getElementById("sushiSmokedSalmonButton");
SmokedSalmonCartButton.addEventListener("click", sushiSmokedSalmonCartModal);
function sushiSmokedSalmonCartModal() {
  db.collection("Food Menu").doc("Sushi").get().then(function (doc) {
    if (doc.exists) {
      let data = doc.data();
      let array = data.SushiB;
      updateModalSmokedSalmon(array[0], array[1], array[2]);
    }
  });


}
function updateModalSmokedSalmon(name, price, quantity) {
  // Get ele
  const modal = document.getElementById("modal");
  const inputCounter = document.getElementById("inputCounterSmokedSalmon");
  const totalPriceElement = modal.querySelector("h6:last-of-type");
  inputCounter.value = parseInt(inputCounter.value) + quantity;
  totalPrice = price * inputCounter.value;
  // Check if item is already in modal
  if (modal.innerHTML.indexOf(name) >= 0) {
    // Update quantity and total price
    let quantityElement = modal.querySelector("#modalSmokedSalmon h6:first-of-type");
    let priceElement = modal.querySelector("#modalSmokedSalmon h6:nth-of-type(2)");
    quantityElement.innerHTML = inputCounter.value;
    priceElement.innerHTML = `$${totalPrice}`;
    totalPriceElement.innerHTML = `Total: $${totalPrice}`;
    return;
  }

  // UP
  modal.innerHTML += `

    <div id="modalSmokedSalmon" class="col-12 pl-2 pr-4 mb-3">
     
    <img class="mr-3" src="/img/menu/2-smoked.jpg" style="width: 50px; height: 50px; float:left; border-radius:500%;">
    <button class="fa-solid fa-trash" style="border:none; background-color:white; float:right"></button>
    <h4 style="font-size:medium;">${name}</h4>
    <h6 style="float:left;">${inputCounterSmokedSalmon.value}</h6>
    <p style="float:right; margin-bottom:0rem; padding-top:0rem;">Price: $70</p><br>

    <br>
    </div>
    `;
  document.getElementById('minusSmokedSalmon').addEventListener('click', function () {
    // imbis na naka hard code dito na lng mag geget ng current quantity at price
    let quantityElement = document.getElementById('inputCounterSmokedSalmon');
    let quantity = parseInt(quantityElement.value, 10);
    let price = 70;

    // pang decrement
    quantity--;
    let totalPrice = quantity * price;
    document.getElementById('totalPrice').innerHTML = `Total: $${totalPrice}`;

    // update ung quantity
    quantityElement.value = quantity;
  });

  document.getElementById('plusSmokedSalmon').addEventListener('click', function () {
    // imbis na naka hard code dito na lng mag geget ng current quantity at price
    let quantityElement = document.getElementById('inputCounterSmokedSalmon');
    let quantity = parseInt(quantityElement.value, 10);
    let price = 70;

    // pang increment
    quantity += 1;
    let totalPrice = quantity * price;
    document.getElementById('totalPrice').innerHTML = `Total: $${totalPrice}`;

    // Update ung quantity
    quantityElement.value = quantity;
  });

  // Get a list of all the trash button elements
  const trashButtons = modal.querySelectorAll('.fa-trash');

  // Add a click event listener to each trash button
  trashButtons.forEach(function (trashButton) {
    trashButton.addEventListener('click', function () {
      inputCounterSmokedSalmon.value = 0;
      // Remove the parent element of the trash button (which is the item)
      this.parentElement.remove();
    });
  });

  modal.style.display = "block";
}


//PALEO
let sushiPaleoCartButton = document.getElementById("sushiPaleoButton");
sushiPaleoCartButton.addEventListener("click", sushiPaleoCartModal);
function sushiPaleoCartModal() {
  db.collection("Food Menu").doc("Sushi").get().then(function (doc) {
    if (doc.exists) {
      let data = doc.data();
      let array = data.SushiC;
      updateModalPaleo(array[0], array[1], array[2]);
    }
  });


}
function updateModalPaleo(name, price, quantity) {
  // Get ele
  const modal = document.getElementById("modal");
  const inputCounter = document.getElementById("inputCounterPaleo");
  const totalPriceElement = modal.querySelector("h6:last-of-type");
  inputCounter.value = parseInt(inputCounter.value) + quantity;
  totalPrice = price * inputCounter.value;
  // Check if item is already in modal
  if (modal.innerHTML.indexOf(name) >= 0) {
    // Update quantity and total price
    let quantityElement = modal.querySelector("#modalPaleo h6:first-of-type");
    let priceElement = modal.querySelector("#modalPaleo h6:nth-of-type(2)");
    quantityElement.innerHTML = inputCounter.value;
    priceElement.innerHTML = `$${totalPrice}`;
    totalPriceElement.innerHTML = `Total: $${totalPrice}`;
    return;
  }

  // UP
  modal.innerHTML += `

    <div id="modalPaleo" class="col-12 pl-2 pr-4 mb-3">
     
    <img class="mr-3" src="/img/menu/3-paleo.jpg" style="width: 50px; height: 50px; float:left; border-radius:500%;">
    <button class="fa-solid fa-trash" style="border:none; background-color:white; float:right"></button>
    <h4 style="font-size:medium;">${name}</h4>
    <h6 style="float:left;"> ${inputCounterPaleo.value}</h6>
    <p style="float:right; margin-bottom:0rem; padding-top:0rem;">Price: $75</p><br>
    <br>
    </div>
    `;

  document.getElementById('minusPaleo').addEventListener('click', function () {
    // imbis na naka hard code dito na lng mag geget ng current quantity at price
    let quantityElement = document.getElementById('inputCounterPaleo');
    let quantity = parseInt(quantityElement.value, 10);
    let price = 75;

    // pang decrement
    quantity--;
    let totalPrice = quantity * price;
    document.getElementById('totalPrice').innerHTML = `Total: $${totalPrice}`;

    // update ung quantity
    quantityElement.value = quantity;
  });

  document.getElementById('plusPaleo').addEventListener('click', function () {
    // imbis na naka hard code dito na lng mag geget ng current quantity at price
    let quantityElement = document.getElementById('inputCounterPaleo');
    let quantity = parseInt(quantityElement.value, 10);
    let price = 75;

    // pang increment
    quantity += 1;
    let totalPrice = quantity * price;
    document.getElementById('totalPrice').innerHTML = `Total: $${totalPrice}`;

    // Update ung quantity
    quantityElement.value = quantity;
  });

  // Get a list of all the trash button elements
  const trashButtons = modal.querySelectorAll('.fa-trash');

  // Add a click event listener to each trash button
  trashButtons.forEach(function (trashButton) {
    trashButton.addEventListener('click', function () {
      inputCounterPaleo.value = 0;
      // Remove the parent element of the trash button (which is the item)
      this.parentElement.remove();
    });
  });

  modal.style.display = "block";
}

//RAMEN
//TANTAN
let TantanCartButton = document.getElementById("ramenTantanbutton");
TantanCartButton.addEventListener("click", ramenTantanCartModal);
function ramenTantanCartModal() {
  db.collection("Food Menu").doc("Ramen").get().then(function (doc) {
    if (doc.exists) {
      let data = doc.data();
      let array = data.RamenA;
      updateModalTantan(array[0], array[1], array[2]);
    }
  });


}
function updateModalTantan(name, price, quantity) {
  // Get ele
  const modal = document.getElementById("modal");
  const inputCounter = document.getElementById("inputCounterTantan");
  const totalPriceElement = modal.querySelector("h6:last-of-type");
  inputCounter.value = parseInt(inputCounter.value) + quantity;
  totalPrice = price * inputCounter.value;
  // Check if item is already in modal
  if (modal.innerHTML.indexOf(name) >= 0) {
    // Update quantity and total price
    let quantityElement = modal.querySelector("#modalTantan h6:first-of-type");
    let priceElement = modal.querySelector("#modalTantan h6:nth-of-type(2)");
    quantityElement.innerHTML = inputCounter.value;
    priceElement.innerHTML = `$${totalPrice}`;
    totalPriceElement.innerHTML = `Total: $${totalPrice}`;
    return;
  }

  // UP
  modal.innerHTML += `

    <div id="modalTantan" class="col-12 pl-2 pr-4 mb-3">
     
    <img class="mr-3" src="/img/menu/1-TanTan.png"  style="width: 50px; height: 50px; float:left; border-radius:500%;">
    <button class="fa-solid fa-trash" style="border:none; background-color:white; float:right"></button>
    <h4 style="font-size:medium;">${name}</h4>
    <h6 style="float:left;">${inputCounterTantan.value}</h6>
    <p style="float:right; margin-bottom:0rem; padding-top:0rem;">Price: ${totalPrice}</p><br>

    <br>
    </div>
    `;
  document.getElementById('minusTantan').addEventListener('click', function () {
    // imbis na naka hard code dito na lng mag geget ng current quantity at price
    let quantityElement = document.getElementById('inputCounterTantan');
    let quantity = parseInt(quantityElement.value, 10);
    let price = 150;

    // pang decrement
    quantity--;
    let totalPrice = quantity * price;
    document.getElementById('totalPrice').innerHTML = `Total: $${totalPrice}`;

    // update ung quantity
    quantityElement.value = quantity;
  });

  document.getElementById('plusTantan').addEventListener('click', function () {
    // imbis na naka hard code dito na lng mag geget ng current quantity at price
    let quantityElement = document.getElementById('inputCounterTantan');
    let quantity = parseInt(quantityElement.value, 10);
    let price = 150;

    // pang increment
    quantity += 1;
    let totalPrice = quantity * price;
    document.getElementById('totalPrice').innerHTML = `Total: $${totalPrice}`;

    // Update ung quantity
    quantityElement.value = quantity;
  });

  // Get a list of all the trash button elements
  const trashButtons = modal.querySelectorAll('.fa-trash');

  // Add a click event listener to each trash button
  trashButtons.forEach(function (trashButton) {
    trashButton.addEventListener('click', function () {
      inputCounterTantan.value = 0;
      // Remove the parent element of the trash button (which is the item)
      this.parentElement.remove();
    });
  });

  modal.style.display = "block";
}


//Nikutama
let ramenNikutamaCartButton = document.getElementById("ramenNikutamabutton");
ramenNikutamaCartButton.addEventListener("click", ramenNikutamaCartModal);
function ramenNikutamaCartModal() {
  db.collection("Food Menu").doc("Ramen").get().then(function (doc) {
    if (doc.exists) {
      let data = doc.data();
      let array = data.RamenB;
      updateModalNikutama(array[0], array[1], array[2]);
    }
  });


}
function updateModalNikutama(name, price, quantity) {
  // Get ele
  const modal = document.getElementById("modal");
  const inputCounter = document.getElementById("inputCounterNikutama");
  const totalPriceElement = modal.querySelector("h6:last-of-type");
  inputCounter.value = parseInt(inputCounter.value) + quantity;
  totalPrice = price * inputCounter.value;
  // Check if item is already in modal
  if (modal.innerHTML.indexOf(name) >= 0) {
    // Update quantity and total price
    let quantityElement = modal.querySelector("#modalNikutama h6:first-of-type");
    let priceElement = modal.querySelector("#modalNikutama h6:nth-of-type(2)");
    quantityElement.innerHTML = inputCounter.value;
    priceElement.innerHTML = `$${totalPrice}`;
    totalPriceElement.innerHTML = `Total: $${totalPrice}`;
    return;
  }

  // UP
  modal.innerHTML += `

    <div id="modalNikutama" class="col-12 pl-2 pr-4 mb-3">
     
    <img class="mr-3" src="/img/menu/2-Nikutama.png"  style="width: 50px; height: 50px; float:left; border-radius:500%;">
    <button class="fa-solid fa-trash" style="border:none; background-color:white; float:right"></button>
    <h4 style="font-size:medium;">${name}</h4>
    <h6 style="float:left;">${inputCounterNikutama.value}</h6>
    <p style="float:right; margin-bottom:0rem; padding-top:0rem;">Price: $170</p><br>

    <br>
    </div>
    `;
  document.getElementById('minusNikutama').addEventListener('click', function () {
    // imbis na naka hard code dito na lng mag geget ng current quantity at price
    let quantityElement = document.getElementById('inputCounterNikutama');
    let quantity = parseInt(quantityElement.value, 10);
    let price = 170;

    // pang decrement
    quantity--;
    let totalPrice = quantity * price;
    document.getElementById('totalPrice').innerHTML = `Total: $${totalPrice}`;

    // update ung quantity
    quantityElement.value = quantity;
  });

  document.getElementById('plusNikutama').addEventListener('click', function () {
    // imbis na naka hard code dito na lng mag geget ng current quantity at price
    let quantityElement = document.getElementById('inputCounterNikutama');
    let quantity = parseInt(quantityElement.value, 10);
    let price = 170;

    // pang increment
    quantity += 1;
    let totalPrice = quantity * price;
    document.getElementById('totalPrice').innerHTML = `Total: $${totalPrice}`;

    // Update ung quantity
    quantityElement.value = quantity;
  });

  // Get a list of all the trash button elements
  const trashButtons = modal.querySelectorAll('.fa-trash');

  // Add a click event listener to each trash button
  trashButtons.forEach(function (trashButton) {
    trashButton.addEventListener('click', function () {
      inputCounterNikutama.value = 0;
      // Remove the parent element of the trash button (which is the item)
      this.parentElement.remove();
    });
  });

  modal.style.display = "block";
}


//Tonkotsu
let ramenTonkotsuCartButton = document.getElementById("ramenTonkotsubutton");
ramenTonkotsuCartButton.addEventListener("click", ramenTonkotsuCartModal);
function ramenTonkotsuCartModal() {
  db.collection("Food Menu").doc("Ramen").get().then(function (doc) {
    if (doc.exists) {
      let data = doc.data();
      let array = data.RamenC;
      updateModalTonkotsu(array[0], array[1], array[2]);
    }
  });


}
function updateModalTonkotsu(name, price, quantity) {
  // Get ele
  const modal = document.getElementById("modal");
  const inputCounter = document.getElementById("inputCounterTonkotsu");
  const totalPriceElement = modal.querySelector("h6:last-of-type");
  inputCounter.value = parseInt(inputCounter.value) + quantity;
  totalPrice = price * inputCounter.value;
  // Check if item is already in modal
  if (modal.innerHTML.indexOf(name) >= 0) {
    // Update quantity and total price
    let quantityElement = modal.querySelector("#modalTonkotsu h6:first-of-type");
    let priceElement = modal.querySelector("#modalTonkotsu h6:nth-of-type(2)");
    quantityElement.innerHTML = inputCounter.value;
    priceElement.innerHTML = `$${totalPrice}`;
    totalPriceElement.innerHTML = `Total: $${totalPrice}`;
    return;
  }

  // UP
  modal.innerHTML += `

    <div id="modalTonkotsu" class="col-12 pl-2 pr-4 mb-3">
     
    <img class="mr-3" src="/img/menu/3-Tonkotsu.png"   style="width: 50px; height: 50px; float:left; border-radius:500%;">
    <button class="fa-solid fa-trash" style="border:none; background-color:white; float:right"></button>
    <h4 style="font-size:medium;">${name}</h4>
    <h6 style="float:left;">${inputCounterTonkotsu.value}</h6>
    <p style="float:right; margin-bottom:0rem; padding-top:0rem;">Price: $180</p><br>
    
    <br>
    </div>
    `;
  document.getElementById('minusTonkotsu').addEventListener('click', function () {
    // imbis na naka hard code dito na lng mag geget ng current quantity at price
    let quantityElement = document.getElementById('inputCounterTonkotsu');
    let quantity = parseInt(quantityElement.value, 10);
    let price = 180;

    // pang decrement
    quantity--;
    let totalPrice = quantity * price;
    document.getElementById('totalPrice').innerHTML = `Total: $${totalPrice}`;

    // update ung quantity
    quantityElement.value = quantity;
  });

  document.getElementById('plusTonkotsu').addEventListener('click', function () {
    // imbis na naka hard code dito na lng mag geget ng current quantity at price
    let quantityElement = document.getElementById('inputCounterTonkotsu');
    let quantity = parseInt(quantityElement.value, 10);
    let price = 180;

    // pang increment
    quantity += 1;
    let totalPrice = quantity * price;
    document.getElementById('totalPrice').innerHTML = `Total: $${totalPrice}`;

    // Update ung quantity
    quantityElement.value = quantity;
  });

  // Get a list of all the trash button elements
  const trashButtons = modal.querySelectorAll('.fa-trash');

  // Add a click event listener to each trash button
  trashButtons.forEach(function (trashButton) {
    trashButton.addEventListener('click', function () {
      inputCounterTonkotsu.value = 0;
      // Remove the parent element of the trash button (which is the item)
      this.parentElement.remove();
    });
  });

  modal.style.display = "block";
}

