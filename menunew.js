let totalOfAll = 0;
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



  // functions for clicking the menu buttons.

  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('addToCart')) {
      // Find the parent element of the clicked button
      const parent = event.target.parentNode;
      // Find the input element within the parent element
      const input = parent.querySelector('.inputQuantity');

      // Reset the value of the input element to 0
      if (input.value != 0) {

        document.getElementById("mySidenav").style.width = "250px";



        // Get the value of the data-value attribute
        const container = event.target.parentNode.parentNode;

        const h5 = container.querySelector('.foodPrice');
        const value = h5.dataset.value;
        // const parent = event.target.parentNode;
        const div = container.querySelector('.middle');
        const foodName = div.dataset.food;

        const img = container.querySelector('.image');
        const foodImage = img.getAttribute('src');

        const totalPrice = parseInt(value) * input.value;
        totalOfAll += totalPrice;
        const modal = document.querySelector('#modal');

        modal.innerHTML += `
        <div id="modalOrig" class="col-12 pl-2 pr-4 mb-3">

        <img class="mr-3" src=${foodImage} style="width: 50px; height: 50px; float:left; border-radius:500%;">
        <button class="fa-solid fa-trash" style="border:none; background-color:white; float:right"></button>
        <h4 style="font-size:medium;">${foodName}</h4>
        <h6 style="float:left;">Qty: ${input.value}</h6>
        <p style="float:right; margin-bottom:0rem; padding-top:0rem;">Price: ${value}</p><br>
        <p id="total" style="float:right; margin-bottom:0rem; padding-top:0rem;" data-totall="${totalPrice}">Total Price: ${totalPrice}</p><br>
      
        <br>
        </div>
        `;
        console.log('nadagdagan ',totalOfAll, typeof totalOfAll);
        
        // Get the side navigation menu's total element
        const sideNavTotal = document.querySelector('#mySidenav').childNodes[7].childNodes[1];
        sideNavTotal.innerHTML = `Total:  ${totalOfAll}`;

        // modal.querySelector('#total').setAttribute('data-totall', totalPrice)

        input.value = 0;

        modal.style.display = "block";
        
        const totalOneItem = document.querySelector('#modalOrig').querySelector('#total').getAttribute('data-totall');
        
        // Get a list of all the trash button elements
        const trashButtons = modal.querySelectorAll('.fa-trash');
        trashButtons.forEach(function (trashButton) {
          trashButton.addEventListener('click', function () {
            const parent = trashButton.parentNode;
            const totalOneItem = parent.querySelector('#total').getAttribute('data-totall');
            const totalOneItemInt = parseInt(totalOneItem);
            
            totalOfAll -= totalOneItemInt;
            console.log('totalOfAll: ',totalOfAll,typeof totalOfAll);
            sideNavTotal.innerHTML = `Total:  ${totalOfAll}`;
            // const sibling = trashButton.nextElementSibling.nextElementSibling.nextElementSibling.getAttribute('id');
            // console.log(sibling);
            // console.log(parent.innerHTML);
            parent.remove();

          });
        });


      }
    } else if (event.target.classList.contains('closeCart')) {
      document.getElementById("mySidenav").style.width = "0";
    }
  });






  // getting all of the total of orders.
  // modal.querySelector('#total').setAttribute('data-totall', totalPrice)
  // const totalSaIsangItem = modal.querySelector('#total').dataset.totall;
  // console.log(totalSaIsangItem);
  // const sideNavTotal = document.querySelector('#mySidenav').childNodes[7].childNodes[1];
  // console.log(sideNavTotal);



  // const totalValues = modal.querySelectorAll('#total');
  // totalValues.forEach((totalvalue)=>{
  //   totalLast += parseInt(totalvalue.dataset.totall);
  //   totalLast += isNaN(value) ? 0 : value;
  // });
  // sideNavTotal.innerHTML = `Total: ${totalLast}`
  // kada pindut sa addToCart yung input quantity maging 0.







}