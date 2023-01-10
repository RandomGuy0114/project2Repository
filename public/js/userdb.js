const firebaseConfig = {
  apiKey: "AIzaSyCp7jA3DrW9RCi5YFMj_fiJ-N8t-IF5M2E",
  authDomain: "wd29-a8133.firebaseapp.com",
  databaseURL:
    "https://wd29-a8133-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wd29-a8133",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Add a user's name, email and uid to the 'users' collection
const addUser = (user) => {
  db.collection("users")
    .add({
      uid: user.uid,
      name: user.displayName,
      email: user.email,
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
};

// Retrieve a user's name, email, and uid from the 'users' collection
const getUser = (id) => {
  db.collection("users")
    .doc(id)
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
