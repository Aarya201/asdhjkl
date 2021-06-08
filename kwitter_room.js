var firebaseConfig = {
  apiKey: "AIzaSyCcBnYRowR2qzC1a9XBFInYrPVsOQqHzIQ",
  authDomain: "project-f1702.firebaseapp.com",
  databaseURL: "https://project-f1702-default-rtdb.firebaseio.com",
  projectId: "project-f1702",
  storageBucket: "project-f1702.appspot.com",
  messagingSenderId: "221341004835",
  appId: "1:221341004835:web:5b1d4990861aed5dee2d96"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
Username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + Username + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //Start code

      //End code
      });});}
getData();

function redirectToRoomName(name) {
    console.log(name)
    localStorage.setItem("room_name", name);
    window.location="kwitter_page.html";
}
function logout() {
    localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
