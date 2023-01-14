function logout() {
  firebase.auth().signOut();
  successNotification("Successfully logged out!")
  document.getElementById("user-prof").style.display = "none";
  document.getElementById("user-log").style.display = "block";
  location.reload();

}

function closemodal() {
  getUserData(user.uid);
  successNotification("WELCOME" + user.name + "Enjoy Your Stay..");
  document.getElementById("user-div").style.display = "none";
  document.getElementById("user-dashboard").style.display = "none";
  location.reload();

}
