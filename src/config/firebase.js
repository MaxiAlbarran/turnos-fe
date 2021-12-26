import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyDpoQZy1tk401yE3hKhQL8MYATO-gZXygE',
  authDomain: 'turnos-16c2a.firebaseapp.com',
  projectId: 'turnos-16c2a',
  storageBucket: 'turnos-16c2a.appspot.com',
  messagingSenderId: '398502110020',
  appId: '1:398502110020:web:9e9f478b4e5955c4a6ed11',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export {db};
