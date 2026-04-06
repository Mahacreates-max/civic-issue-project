const firebaseConfig = {
  apiKey: "AIzaSyA9-qTcBgNawfXTMbHUPavwTOvAZG99luw",
  authDomain: "civil-issues.firebaseapp.com",
  databaseURL: "https://civil-issues-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "civil-issues",
  storageBucket: "civil-issues.appspot.com",
  messagingSenderId: "45641660010",
  appId: "1:45641660010:web:e2524193750d051342fc13"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Connect to Realtime Database
const db = firebase.database();