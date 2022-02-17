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

export const createUserProfileDocument = async (
  userAuth: firebase.User,
  additionalData?: String
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      if (error instanceof Error)
        console.log('error cerating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
