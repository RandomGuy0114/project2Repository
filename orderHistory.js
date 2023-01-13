var orderData = {
  orderId: "123",
  status: "Delivered",
  customerName: "John Doe",
  contactNumber: "555-555-5555",
  address: "123 Main St",
  landmark: "Near the park",
  paymentMethod: "Credit Card",
  specialRequests: "None",
  foodQuantity: "2",
  total: "₱999"
};
displayOrderData(orderData);


function displayOrderData(orderData) {
    document.getElementById("idNumber").innerHTML = orderData.orderId;
    document.getElementById("orderStatus").innerHTML = orderData.status;
    document.getElementById("customerName").innerHTML = orderData.customerName;
    document.getElementById("contactNumber").innerHTML = orderData.contactNumber;
    document.getElementById("address").innerHTML = orderData.address;
    document.getElementById("landmark").innerHTML = orderData.landmark;
    document.getElementById("paymentMethod").innerHTML = orderData.paymentMethod;
    document.getElementById("specialRequests").innerHTML = orderData.specialRequests;
    document.getElementById("foodQuantity").innerHTML = orderData.foodQuantity;
    document.getElementById("total").innerHTML = orderData.total;


    orderlist.innerHTML += `<div class="card mx-auto" style="width: 98%;">
    <div id="orderText" class="card-body">
        <center><h2 class="pb-3">Order History</h2></center>
  
        <div class="row pl-2 ml-3">
            <!-- order 1 -->
            <div id="orderList" class="card col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div class="col-12 pl-2 pr-4 mb-0 pb-0 pl-1">
                    <p style="float:left; margin-bottom:0px;">Order#:
                    <p style="float:left;margin-bottom:0px; margin-left:0.2rem" id="idNumber">order#
                    </p>
                    <p style="float:right;">Delivered
                    </p>
                    <p style="float:right;" id="orderStatus">Status:
                    </p>
                    </p>
                </div>
                <div class="col-12 pl-2 pr-4 mb-0 pb-0 pl-1">
                    <p style="float:left; margin-bottom:0px;">Name:
                    <p style="float:left;margin-bottom:0px; margin-left:0.2rem" id="customerName">NameHere
                    </p>
                    <p style="float:right; margin-bottom:0px;">Phone#HERE
                    </p>
                    <p style="float:right; margin-bottom:0px;" id="contactNumber">Phone #:
                    </p>
                    </p>
                </div>
                <div class="col-12 pl-2 pr-4 mb- pl-1">
                    <p style="float:left; margin-bottom:0px;">Address:
                    <p style="float:left;margin-bottom:0px; margin-left:0.2rem" id="address">Ad HERE
                    </p>
                    </p>
                </div>
                <div class="col-12 pl-2 pr-4 mb- pl-1">
                    <p style="float:left; margin-bottom:0px;">Landmark:
                    <p style="float:left;margin-bottom:0px; margin-left:0.2rem" id="landmark">HERE
                    </p>
                    </p>
                </div>
                <div class="col-12 pl-2 pr-4 mb- pl-1">
                    <p style="float:left; margin-bottom:0px;">Pament Method:
                    <p style="float:left;margin-bottom  ; margin-left:0.2rem" id="paymentMethod">
                    Credit Card
                    </p>
                    </p>
                </div>
                <div class="col-12 pl-2 pr-4 mb- pl-1">
                    <p style="float:left; margin-bottom:0px;">
                        Special Requests:
                    <p style="float:left;margin-bottom:0px; margin-left:0.2rem" id="specialRequests">
                        None
                    </p>
                    </p>
                </div>
                <div class="col-12 pl-2 pr-4 mb- pl-1">
                    <p style="float:left; margin-bottom:0px;">
                        Quantity:
                    <p style="float:left;margin-bottom:0px; margin-left:0.2rem" id="foodQuantity">
                        2
                    </p>
                    </p>
                </div>
                <div class="col-12 pl-2 pr-4 mb- pl-1">
                    <p style="float:left; margin-bottom:0px;">
                        Total:
                    <p style="float:left;margin-bottom:0px; margin-left:0.2rem" id="total">
                        ₱999
                    </p>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`;
}