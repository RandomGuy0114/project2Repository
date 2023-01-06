function send_verification() {
  // Generate a random verification code
  var verificationCode = Math.floor(Math.random() * 1000000);
  // Store the code in the user's account data
  firebase.database().ref('users/' + firebase.auth().currentUser.uid).update({
    verificationCode: verificationCode
  });
  // Send the email with the verification code included in the message
  firebase.auth().currentUser.sendEmailVerification({
    url: 'http://www.example.com/verify?code=' + verificationCode
  }).then(() => {
    successNotification("Verification email has successfully been sent!");
  }).catch((err) => errorNotification(err.message));
}