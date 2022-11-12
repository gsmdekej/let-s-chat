var firebaseConfig = {
    apiKey: "AIzaSyAEEo1MfwG7k0Rs6YeSxXPh2isbjIs3ES0",
    authDomain: "let-s-chat-ba9cb.firebaseapp.com",
    databaseURL: "https://let-s-chat-ba9cb-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-ba9cb",
    storageBucket: "let-s-chat-ba9cb.appspot.com",
    messagingSenderId: "629433109289",
    appId: "1:629433109289:web:7801e0fa8daf55a4594538"
  };
  firebase.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
