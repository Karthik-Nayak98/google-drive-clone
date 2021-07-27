import firebase from 'firebase';
import 'firebase/storage';

export const app = firebase.initializeApp({
  projectId: 'ggl-drv-cln',
  appId: '1:731193844916:web:d8a35aca7e8e5b661a23e1',
  storageBucket: 'ggl-drv-cln.appspot.com',
  locationId: 'us-central',
  apiKey: 'AIzaSyBetM5E0COKoUBkXbqmimxmyL1untw5uoM',
  authDomain: 'ggl-drv-cln.firebaseapp.com',
  messagingSenderId: '731193844916',
});

const storage = firebase.storage();
const auth = firebase.auth();

export { storage, auth };
