import firebase from 'firebase'
import 'firebase/storage'
const firebaseConfig={ 
    apiKey: "AIzaSyClnM4ed-U22a9mObAtXqwF8HR4ZCR86FI",
    authDomain: "cashregister-47d59.firebaseapp.com",
    databaseURL: "https://cashregister-47d59-default-rtdb.firebaseio.com",
    projectId: "cashregister-47d59",
    storageBucket: "cashregister-47d59.appspot.com",
    messagingSenderId: "770900195146",
    appId: "1:770900195146:web:eb4e3c41e97034745233b3",
    measurementId: "G-S0PKJDD6N6"

};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const storage=firebase.storage();
export {storage,firebase as default};