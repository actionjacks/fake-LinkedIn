import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCVuJ5wJE8vQgpC3BJ64hBjgnmOl5cMAfc",
  authDomain: "my-linkedin-2193d.firebaseapp.com",
  projectId: "my-linkedin-2193d",
  storageBucket: "my-linkedin-2193d.appspot.com",
  messagingSenderId: "8492072053",
  appId: "1:8492072053:web:476b96e3d92d15c6218c3c",
  measurementId: "G-C1KQBZ6N2T",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
