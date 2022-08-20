import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
 apiKey: "AIzaSyB-LffhzVyaqvktWOg_qxLWUJhTCa823kE",
 authDomain: "todo-app-7da32.firebaseapp.com",
 projectId: "todo-app-7da32",
 storageBucket: "todo-app-7da32.appspot.com",
 messagingSenderId: "398036727145",
 appId: "1:398036727145:web:fe927c4cf30fc2db1539f8"
};
 
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;