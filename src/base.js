import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyD6VrhSMJ_iZdyX-t3k0_gcwLJgzV3ERRA",
  authDomain: "treinta-junior.firebaseapp.com",
  databaseURL: "https://treinta-junior.firebaseio.com",
  projectId: "treinta-junior",
  storageBucket: "treinta-junior.appspot.com",
  messagingSenderId: "234561904997",
  appId: "1:234561904997:web:a2ceb2f03c9b100927418c"
});

export default app;
