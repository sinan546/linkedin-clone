import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAj8rbIUg2179J876vQq1Fa9limJuJGR_o",
  authDomain: "linkedin-clone-15.firebaseapp.com",
  projectId: "linkedin-clone-15",
  storageBucket: "linkedin-clone-15.appspot.com",
  messagingSenderId: "135399204774",
  appId: "1:135399204774:web:275c2c2a17700756ca1167",
  measurementId: "G-1PNM97RMVJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
