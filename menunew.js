
window.onload = function () {


    // for customer choices of quantity.
    const buttons = document.querySelectorAll('.add, .subtract');

    // Add a click event listener to each of the buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Find the parent element of the button
            const parent = button.parentNode;
            // Find the input element within the parent element
            const input = parent.querySelector('.inputQuantity');
            // Increment or decrement the value of the input element
            if (button.classList.contains('add')) {
                input.value = parseInt(input.value) + 1;
            } else if (button.classList.contains('subtract')) {
                if (input.value > 0) {
                    input.value = parseInt(input.value) - 1;
                }
            }
        });
    });
  
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('addToCart')) {
            // Find the parent element of the clicked button
          const parent = event.target.parentNode;
          // Find the input element within the parent element
          const input = parent.querySelector('.inputQuantity');
          // Reset the value of the input element to 0
          if (input.value != 0) {
            input.value = 0;
            document.getElementById("mySidenav").style.width = "250px";
          } 
        } else if (event.target.classList.contains('closeCart')) {
          document.getElementById("mySidenav").style.width = "0";
        }
      });




    
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
    document.getElementById('minusOrig').addEventListener('click', function() {
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
    
    document.getElementById('plusOrig').addEventListener('click', function() {
      // imbis na naka hard code dito na lng mag geget ng current quantity at price
      let quantityElement = document.getElementById('inputCounterOrig');
      let quantity = parseInt(quantityElement.value, 10);
      let price = 30;
    
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
        inputCounterOrig.value = 0;
        // Remove the parent element of the trash button (which is the item)
        this.parentElement.remove();
      });
    });
  
    modal.style.display = "block";
}
};