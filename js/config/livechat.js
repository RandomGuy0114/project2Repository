var db = firebase.firestore();

// Get a reference to the Realtime database
var rtdb = firebase.database();

// Get a reference to the current user
var user = firebase.auth().currentUser;

// Get a reference to the user's avatar
var avatar = document.getElementById("user-avatar");

// Get a reference to the typing indicator
var typingIndicator = document.getElementById("typing-indicator");

// Get a reference to the notification badge
var notificationBadge = document.getElementById("notification-badge");

// Get a reference to the notification bell
var notificationBell = document.getElementById("notification-bell");

// Check if user is signed in
if (user) {
  // Get user's avatar from Firestore
  db.collection("users").doc(user.uid).get().then(function(doc) {
    if (doc.exists) {
      avatar.src = doc.data().avatar;
    } else {
      console.log("User not found in Firestore");
    }
    }).catch(function(error) {
    console.log("Error getting user from Firestore: ", error);
    });
    
    // Add event listener for input field to detect if user is typing
    messageInput.addEventListener("input", function() {
    if (this.value) {
    // Show typing indicator
    typingIndicator.style.display = "block";
    // Send typing event to Realtime database
    rtdb.ref("typing/" + user.uid).set(true);
    } else {
    // Hide typing indicator
    typingIndicator.style.display = "none";
    // Remove typing event from Realtime database
    rtdb.ref("typing/" + user.uid).remove();
    }
    });
    
    