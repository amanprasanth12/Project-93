
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBM_Fq3xT7tHC5mlExhukMvLqCsHW9y2Rg",
      authDomain: "kwitter-fe139.firebaseapp.com",
      databaseURL: "https://kwitter-fe139-default-rtdb.firebaseio.com",
      projectId: "kwitter-fe139",
      storageBucket: "kwitter-fe139.appspot.com",
      messagingSenderId: "466116278248",
      appId: "1:466116278248:web:fd5714331078900b00d65d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
