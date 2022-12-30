import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js'
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
const db = getfirestore();


document.getElementById('addtocart').addEventListener('click', function() {

    let name = document.getElementById('orderticket').value;
    let quantity = document.getElementById('quantity').value;
    let price = document.getElementById('price').value;
    let totalPrice = document.getElementById('total').value;

    
    addToCart(name, quantity, price);
  });
  
  function addToCart(name, price, totalPrice) {
    // Add the item to the shopping cart
  const order = {
    name: name,
    price: price,
    quantity: 1,
    total: totalPrice
  };
    foodCart.push(order);

  // Update the cart total
  updateCartTotal();
  }

  function updateCartTotal() {
    let totalCost = 0;
    for (const order of foodCart) {
      totalCost += order.price * order.quantity;
    }
    document.querySelector('#pricetotal').textContent = `Total: $${totalCost}`;
  }

  function displayTicket(name, quantity, price) {
    let ticketDisplay = document.getElementById('ticketdisplay');
    ticketDisplay.innerHTML = ''; // pang refresh or clear
    
    // Generate the ticket display HTML
    let ticket = '<h2>Your Ticket</h2>';
    ticket += '<p>Order: ' + name + '</p>';
    ticket += '<p>Quantity: ' + quantity + '</p>';
    ticket += '<p>Price: ' + price + '</p>';
    
    // Add the ticket display HTML to the ticket display element
    ticketDisplay.innerHTML = ticket;
  }