// SETTING UP FIREBASE

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCE0lH68NQDweB6haeEUih9hTPkqnzcXHQ',
  authDomain: 'shopping-list-app-a2d29.firebaseapp.com',
  projectId: 'shopping-list-app-a2d29',
  storageBucket: 'shopping-list-app-a2d29.appspot.com',
  messagingSenderId: '127664412728',
  appId: '1:127664412728:web:8f1556e52dba7e26e52ecd',
  measurementId: 'G-37Q8XYV8XY',
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;

const db = app.firestore();
export default db;
