//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyBzd4nFEiyijWcNcHEDVUwu3by7PE7OYPU",
    authDomain: "comp1800-demo-5f9b1.firebaseapp.com",
    projectId: "comp1800-demo-5f9b1",
    storageBucket: "comp1800-demo-5f9b1.appspot.com",
    messagingSenderId: "814939009685",
    appId: "1:814939009685:web:5b64d99686cf511afca19c"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
