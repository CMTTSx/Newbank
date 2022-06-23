import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyD7tbnO0oAilDt8727Jzh3KuybXP5iKHx0",
    authDomain: "newbank-1718c.firebaseapp.com",
    projectId: "newbank-1718c",
    storageBucket: "newbank-1718c.appspot.com",
    messagingSenderId: "805128264208",
    appId: "1:805128264208:web:8105a1ff5dfa775f834895"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;