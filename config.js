import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    // apiKey: "AIzaSyASyOjOtJla-X-b3io2eLoaUc_bIRFSIIc",
    // authDomain: "book-santa-app.firebaseapp.com",
    // databaseURL: "https://book-santa-app.firebaseio.com",
    // projectId: "book-santa-app",
    // storageBucket: "book-santa-app.appspot.com",
    // messagingSenderId: "69634746716",
    // appId: "1:69634746716:web:6fbbfc110fb4475365f999",
    // measurementId: "G-DLB7XC0JPL"

    apiKey: "AIzaSyDknmmuuvKvvaRK9zD9rE-Nimgs13derHw",
    authDomain: "book-santa-app-7fbb1.firebaseapp.com",
    databaseURL: "https://book-santa-app-7fbb1.firebaseio.com",
    projectId: "book-santa-app-7fbb1",
    storageBucket: "book-santa-app-7fbb1.appspot.com",
    messagingSenderId: "158070434662",
    appId: "1:158070434662:web:a23cb045ef7b69199f36a7"
    
    
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
