import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyBWIy-9dhtD7fnJwCbyGXTVehBI3NxEK3I',
  authDomain: 'source-shop.firebaseapp.com',
  projectId: 'source-shop',
  storageBucket: 'source-shop.appspot.com',
  messagingSenderId: '993852773633',
  appId: '1:993852773633:web:5650dc1eb582181c787700',
  measurementId: 'G-PKG5SF8JJG',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
