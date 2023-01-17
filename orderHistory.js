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




