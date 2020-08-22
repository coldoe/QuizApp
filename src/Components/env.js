import firebase from "firebase";
require("dotenv").config();

//values for specific keys should be in process.env
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "quizzappkdoe.firebaseapp.com",
  databaseURL: "https://quizzappkdoe.firebaseio.com",
  projectId: "quizzappkdoe",
  storageBucket: "quizzappkdoe.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// const app = firebase.initializeApp(firebaseConfig);
// export const db = app.database();

const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
