import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBUyI2fgXAqUg3cI4B9t8sLj72nTx2byvQ",
    authDomain: "money-app-f6094.firebaseapp.com",
    databaseURL: "https://money-app-f6094.firebaseio.com",
    projectId: "money-app-f6094",
    storageBucket: "money-app-f6094.appspot.com",
    messagingSenderId: "482406218322",
    appId: "1:482406218322:web:d89cb1bfb2e2f2b9bc7d8b",
    measurementId: "G-2X4JG6NSBT"
  };

  firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;