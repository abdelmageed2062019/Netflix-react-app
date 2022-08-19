//to use firebase app
import Firebase from "firebase/compat/app"; //v9

//to use auth
import "firebase/compat/auth"; //v9

//to use firestore
import "firebase/compat/firestore"; //v9

const config = {
  apiKey: "AIzaSyBKH9o8FDFam4Zf0CCTF0rkBHY0YLEWmFY",
  authDomain: "netflix-app-a568d.firebaseapp.com",
  projectId: "netflix-app-a568d",
  storageBucket: "netflix-app-a568d.appspot.com",
  messagingSenderId: "98379127774",
  appId: "1:98379127774:web:8604e3a4a6dcde4ae0db4f",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
