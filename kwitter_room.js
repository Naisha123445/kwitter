
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAkXQmV0EyuqW_vImfv8MIiWGycwY99LDQ",
      authDomain: "kwitter-63674.firebaseapp.com",
      databaseURL: "https://kwitter-63674-default-rtdb.firebaseio.com",
      projectId: "kwitter-63674",
      storageBucket: "kwitter-63674.appspot.com",
      messagingSenderId: "893860877989",
      appId: "1:893860877989:web:7ba672f2268fdeaf3adf4c"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+user_name+"!";

    function addRoom(){
          room_name=document.getElementById("room_name").value;

        firebase.database().ref("/").child(room_name).update({
              purpose:"adding room name"
        });
        localStorage.setItem("room_name",room_name) ;
        
        window.location="kwitter_page.html";
    }



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name- "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout1(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}