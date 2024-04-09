import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, getFirestore, getDocs, getDoc } from 'firebase/firestore';


const firebaseApp = initializeApp({
    apiKey: "AIzaSyCyPaNEC-k-ol6YKdFawkbdA9pZ3Z8HQOY",
    authDomain: "oasis-41a24.firebaseapp.com",
    projectId: "oasis-41a24",
    storageBucket: "oasis-41a24.appspot.com",
    messagingSenderId: "307230308945",
    appId: "1:307230308945:web:ba6c99344b287132151670",
    measurementId: "G-5GWY900RZS"
});
const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
db.collection('todos').getDocs();
const todosCol = collection(db, 'todos');
const snapshot = await getDocs(todosCol);


//detect auth state
auth.onAuthStateChanged(user {
    
})
// onAuthStateChanged(auth, user {
//     if(user = null) {
//         console.log('logged in!');
//     } else {
//         console.log('No user');
//     }
// });