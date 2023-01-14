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
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firestore database
let db = firebase.firestore();

window.onload = function () {
    orderData();
}

function displayOrderData(orderDataArray) {
    // Clear any previous data
    document.getElementById("orderlist").innerHTML = "";
    // Loop through the array of order data
    for (let i = 0; i < orderDataArray.length; i++) {
        // Create a new div element for each order
        let newOrder = document.createElement("div");
        newOrder.classList.add("card", "col-lg-4", "col-md-6", "col-sm-12", "col-xs-12");
        // Add the order data to the new div element
        newOrder.innerHTML = `
            <div class="col-12 pl-2 pr-4 mb-0 pb-0 pl-1 pt-3">
                <p style="float:left; margin-bottom:0px;">Order#:
                <p style="float:left;margin-bottom:0px; margin-left:0.2rem" id="idNumber">${orderDataArray[i].id}
                </p>
                <p style="float:right;" id="orderStatus">${orderDataArray[i].orderStatus}
                </p>
                <p style="float:right;" >Status:
                </p>
                </p>
            </div>
            <div class="col-12 pl-2 pr-4 mb-0 pb-0 pl-1">
                <p style="float:left; margin-bottom:0px;">Name:
                <p style="float:left;margin-bottom:0px; margin-left:0.2rem" id="customerName">${orderDataArray[i].customerName}
                </p>
                <p style="float:right; margin-bottom:0px;" id="contactNumber">${orderDataArray[i].contact}
                </p>
                <p style="float:right; margin-bottom:0px;">Phone #:
                </p>
                </p>
            </div>
            <div class="col-12 pl-2 pr-4 mb- pl-1">
                <p style="float:left;
                margin-bottom:0px;">House No#:
                <p style="float:left;margin-bottom:0px; margin-left:0.2rem" id="houseno">${orderDataArray[i].houseno}
                </p>
                <p style="float:right;
                margin-bottom:0px;">Street:<p style="float:left;margin-bottom:0px; margin-left:0.2rem" id="street">${orderDataArray[i].street}
                </p>
                <br>
                <p style="float:left;
                margin-bottom:0px;">Address:
                <p style="float:left;margin-bottom:0px; margin-left:0.2rem" id="address">${orderDataArray[i].barangay}
                </p>
                <p style="float:right; margin-bottom:0px;" id="landmark">${orderDataArray[i].landmark}
                </p>
                <p style="float:right; margin-bottom:0px;">Landmark:
                </p>
                </p>
                </div>
                <div class="col-12 pl-2 pr-4 mb-0 pl-1">
                <p style="float:left; margin-bottom:0px;">Special Requests:
                <p style="float:left;margin-bottom:0px; margin-left:0.2rem" id="specialRequests">${orderDataArray[i].specialRequest}
                </p>
                <p style="float:right; margin-bottom:0px;" id="user">${orderDataArray[i].user}
                </p>
                <p style="float:right; margin-bottom:0px;">Your Order:
                </p>
                </p>
                </div>
                `;
        // Append the new div element to the order list
        document.getElementById("orderlist").appendChild(newOrder);
    }
}

function orderData() {
    let orderDataArray = [];

    // Fetch data from Firestore
    db.collection("Orders").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let orderData = {
                id: doc.data().id,
                customerName: doc.data().name,
                houseno: doc.data().houseno,
                contact: doc.data().contact,
                street: doc.data().street,
                barangay: doc.data().barangay,
                landmark: doc.data().landmark,
                specialRequest: doc.data().specialRequest,
                user: doc.data().user,
                orderStatus: doc.data().status
            }
            orderDataArray.push(orderData);

        });
        displayOrderData(orderDataArray);
    });
}




