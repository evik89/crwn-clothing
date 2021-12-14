import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCnnrst_6NaCSDTmdOPlMCHA6mIz5Wqgp0",
    authDomain: "crwn-db-60a53.firebaseapp.com",
    projectId: "crwn-db-60a53",
    storageBucket: "crwn-db-60a53.appspot.com",
    messagingSenderId: "78354825798",
    appId: "1:78354825798:web:9d3379810735fba7f08047"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

