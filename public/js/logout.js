function logout() {
  firebase.auth().signOut();
  successNotification("Successfully logged out!")
  document.getElementById("user-prof").style.display = "none";
  document.getElementById("user-log").style.display = "block";
  location.reload();

}
