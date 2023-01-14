window.onload = function(){
    displayOrderData(orderData);
}

var orderData = {
    idNumber: "01",
    orderStatus: "Delivered",
    customerName: "Janus Perez",
    contactNumber: "555-555-5555",
    address: "123 Main St",
    landmark: "Near the park",
    paymentMethod: "GCash",
    specialRequests: "SENDHELP",
    foodQuantity: "2",
    orderSubtotal: "₱900",
    deliveryFee: "₱30",
    orderTotal: "₱100"
};

displayOrderData(orderData);


function displayOrderData(orderData) {
    document.getElementById("idNumber").innerHTML = orderData.idNumber;
    document.getElementById("orderStatus").innerHTML = orderData.orderStatus;
    document.getElementById("customerName").innerHTML = orderData.customerName;
    document.getElementById("contactNumber").innerHTML = orderData.contactNumber;
    document.getElementById("address").innerHTML = orderData.address;
    document.getElementById("landmark").innerHTML = orderData.landmark;
    document.getElementById("paymentMethod").innerHTML = orderData.paymentMethod;
    document.getElementById("specialRequests").innerHTML = orderData.specialRequests;
    document.getElementById("foodQuantity").innerHTML = orderData.foodQuantity;
    document.getElementById("orderSubtotal").innerHTML = orderData.orderSubtotal;
    document.getElementById("deliveryFee").innerHTML = orderData.deliveryFee;
    document.getElementById("orderTotal").innerHTML = orderData.orderTotal;
}
