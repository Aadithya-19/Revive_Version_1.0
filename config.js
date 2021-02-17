import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyC_X2IoAIaiZqUCR4uS9Rf7W_uV6tL3XDw",
    authDomain: "svcproject-40c82.firebaseapp.com",
    projectId: "svcproject-40c82",
    storageBucket: "svcproject-40c82.appspot.com",
    messagingSenderId: "1038281179807",
    appId: "1:1038281179807:web:0070a49996a807d645d8aa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();