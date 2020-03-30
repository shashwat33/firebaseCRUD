import firebase from 'firebase'


const config = {
    apiKey: "AIzaSyA0McDMaO11rzEtCM2jui1H3rPeVSEIdtY",
    authDomain: "fir-data1-bf545.firebaseapp.com",
    databaseURL: "https://fir-data1-bf545.firebaseio.com",
    projectId: "fir-data1-bf545",
    storageBucket: "fir-data1-bf545.appspot.com",
    messagingSenderId: "648488057981",
    appId: "1:648488057981:web:1ae9681332b4c91b940514",
    measurementId: "G-C0CQ55PBSL"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  export default firebase;