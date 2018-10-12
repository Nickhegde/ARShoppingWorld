import firebase from 'firebase';

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyBbQTt2hPhpk7ilOMIk5_ggg6AHRqpyW8o",
    authDomain: "fashionar-f9e8b.firebaseapp.com",
    databaseURL: "https://fashionar-f9e8b.firebaseio.com",
    projectId: "fashionar-f9e8b",
    storageBucket: "fashionar-f9e8b.appspot.com",
    messagingSenderId: "127417700055"
};
const fire = firebase.initializeApp(config);
export default fire;