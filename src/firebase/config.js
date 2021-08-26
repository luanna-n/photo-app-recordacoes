 import firebase from 'firebase/app';
 import 'firebase/storage';
 import 'firebase/firestore';
 
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCp2-Phc7Q_qV8G9_Uai-li5PfXvYKrVgA",
    authDomain: "photo-app-firebase-ac05f.firebaseapp.com",
    projectId: "photo-app-firebase-ac05f",
    storageBucket: "photo-app-firebase-ac05f.appspot.com",
    messagingSenderId: "598224550014",
    appId: "1:598224550014:web:541780d4b2875ebd3d802f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectFirestore, projectStorage, timestamp };