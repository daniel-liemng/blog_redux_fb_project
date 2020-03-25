import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgwOVb0t9hFPqHk5qpm07jrMMI24OKPBA",
  authDomain: "blog-react-fa441.firebaseapp.com",
  databaseURL: "https://blog-react-fa441.firebaseio.com",
  projectId: "blog-react-fa441",
  storageBucket: "blog-react-fa441.appspot.com",
  messagingSenderId: "881064783992",
  appId: "1:881064783992:web:d030ca6a5278548e533d8d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
