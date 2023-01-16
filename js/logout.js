function logout() {
  firebase.auth().signOut();
  successNotification("Successfully logged out!")
  document.getElementById("user-prof").style.display = "none";
  document.getElementById("user-log").style.display = "block";
  location.reload();
  firebase.auth().signOut();
  localStorage.clear();
  successNotification("user cache has been cleared")

}

function closemodal() {
  document.getElementById("user-div").style.display = "none";
  location.reload();

}
