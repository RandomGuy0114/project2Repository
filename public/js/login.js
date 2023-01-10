let globalEmail = "";

async function login() {
  console.log('Attempting to login user ...')
  let userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  try {
    const response = await firebase.auth().signInWithEmailAndPassword(userEmail, userPass);
    globalEmail = response.user.email;
  } catch (error) {
    errorNotification(error.message);
  }
  
  
}
