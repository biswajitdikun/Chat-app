import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
// const firebaseConfig = {
//     apiKey: "",
//     authDomain: "",
//     databaseURL: "",
//     projectId: "",
//     storageBucket: "",
//     messagingSenderId: "",
//     appId: "",
//     measurementId: ""
//   };


const firebaseConfig = {
 apiKey: "AIzaSyDthcnpl35iOQDz9PZXePvjPafnfYZ_oJY",
  authDomain: "chatapp-20ba9.firebaseapp.com",
  databaseURL: "https://chatapp-20ba9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chatapp-20ba9",
  storageBucket: "chatapp-20ba9.appspot.com",
  messagingSenderId: "1067954018477",
  appId: "1:1067954018477:web:de8a994f123ed80471ce24",
  measurementId: "G-JP7N61B04W"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  
  export default db;
