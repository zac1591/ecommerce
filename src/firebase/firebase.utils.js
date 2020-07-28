import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDSyEhpCsbIpZdjU3Fkz7x082OTrX7_Vs8",
  authDomain: "crwn-db-8363e.firebaseapp.com",
  databaseURL: "https://crwn-db-8363e.firebaseio.com",
  projectId: "crwn-db-8363e",
  storageBucket: "crwn-db-8363e.appspot.com",
  messagingSenderId: "846174674374",
  appId: "1:846174674374:web:19ef8047a435a08d5ee6c7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
