document.getElementById("facebook-login")
  .addEventListener("click", function () {
    FB.login(
      function (response) {
        if (response.authResponse) {
          // User is logged in, get their data
          FB.api("/me", { fields: "name,email,picture" }, function (response) {
            // Authenticate the user with Firebase
            var provider = new firebase.auth.FacebookAuthProvider();
            provider.setCustomParameters({
              display: "popup",
            });
            firebase
              .auth()
              .signInWithPopup(provider)
              .then(function (result) {
                // The signed-in user info.
                var user = result.user;
                // Store the user's data in Firestore
                firebase
                  .firestore()
                  .collection("users")
                  .doc(user.uid)
                  .set({
                    name: response.name,
                    email: response.email,
                    picture: response.picture.data.url,
                  })
                  .then(function () {
                    console.log("User data saved to Firestore!");
                  })
                  .catch(function (error) {
                    console.error(
                      "Error saving user data to Firestore: ",
                      error
                    );
                  });
              })
              .catch(function (error) {
                // Handle errors
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.error(
                  "Error authenticating user with Firebase: ",
                  errorCode,
                  errorMessage,
                  email,
                  credential
                );
              });
          });
        } else {
          // User cancelled the login prompt
          console.log("User cancelled the login prompt.");
        }
      },
      { scope: "public_profile,email" }
    );
  });
