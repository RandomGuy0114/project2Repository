document.getElementById('addtocart').addEventListener('click', function() {

    let orderTicket = document.getElementById('orderticket').value;
    let quantity = document.getElementById('quantity').value;
    let price = document.getElementById('quantity').value;
    let totalPrice = document.getElementById('total').value;

    
    addToCart(orderTicket, quantity, price, totalPrice);
  });
  
  function addToCart(orderTicket, price, totalPrice) {
    // Add the item to the shopping cart
  const item = {
    order: orderTicket,
    price: price,
    quantity: 1,
    total: totalPrice
  };
    foodCart.push(item);

  // Update the cart total
  updateCartTotal();
  }

  function displayTicket(orderTicket, quantity, price, totalPrice) {
    let ticketDisplay = document.getElementById('ticketdiplay');
    ticketDisplay.innerHTML = ''; // pang refresh or clear
    
    // Generate the ticket display HTML
    let ticket = '<h2>Your Ticket</h2>';
    ticket += '<p>Ticket Type: ' + orderTicket + '</p>';
    ticket += '<p>Quantity: ' + quantity + '</p>';
    ticket += '<p>Quantity: ' + price + '</p>';
    ticket += '<p>Quantity: ' + totalPrice + '</p>';
    
    // Add the ticket display HTML to the ticket display element
    ticketDisplay.innerHTML = ticket;
  }