import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCV1F1la94fMAOiRD8TflVigX10pwD2Jhg",
  authDomain: "redux-snapchat-clone.firebaseapp.com",
  projectId: "redux-snapchat-clone",
  storageBucket: "redux-snapchat-clone.appspot.com",
  messagingSenderId: "236783826639",
  appId: "1:236783826639:web:af53a4d1cb2aeeb6c2e9ba",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
