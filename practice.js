
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCk_GLoHXLZo0ujU-VKolVFgYz_wKDtu0Q",
    authDomain: "kwitter-54bf3.firebaseapp.com",
    databaseURL: "https://kwitter-54bf3-default-rtdb.firebaseio.com",
    projectId: "kwitter-54bf3",
    storageBucket: "kwitter-54bf3.appspot.com",
    messagingSenderId: "391109386381",
    appId: "1:391109386381:web:39c3b521782c2e09d142c4",
    measurementId: "G-KNGMQPTDS5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function addUser()
  {
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      })
  }