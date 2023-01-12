const addUser = (userData) => {
  if (userData.userId) {
    db.collection("userData")
      .doc(userData.userId)
      .set({
        name: userData.name,
        email: userData.email,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  } else {
    console.error("userData object should have userId property");
  }
};

const db = firebase.firestore();
const getUser = (userData) => {
  db.collection("userData")
    .doc(userData.docRef.id)
    .get()
    .then(function (doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(function (error) {
      console.log("Error getting document:", error);
    });
};


function registration() {
  console.log("Attempting to register user ...");
  var user_email = document.getElementById("user_email").value;
  var user_password = document.getElementById("user_password").value;
  var confirm_password = document.getElementById("confirm_password").value;
  if (user_password !== confirm_password) {
    errorNotification("Passwords do not match!");
  } else {
    const auth = firebase.auth();
    auth
      .createUserWithEmailAndPassword(user_email, user_password)
      .then((user) => {
        const userData = {
          name: document.getElementById("user_name").value,
          email: document.getElementById("user_email").value,
        };
        userData.userId = user.user.uid;
        addUser(userData);
        getUser(userData.userId);
      })
      .catch((err) => errorNotification(err.message));
  }
}