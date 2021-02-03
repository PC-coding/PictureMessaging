import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCTY-p9ASySURHMaY-HPRLKtL-hxShTn3s",
    authDomain: "picture-messaging.firebaseapp.com",
    projectId: "picture-messaging",
    storageBucket: "picture-messaging.appspot.com",
    messagingSenderId: "983128724957",
    appId: "1:983128724957:web:95cc44f59ee5864a9c1234"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();


export { db, auth, storage, provider };