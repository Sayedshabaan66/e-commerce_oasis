// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import { getAuth ,GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCyPaNEC-k-ol6YKdFawkbdA9pZ3Z8HQOY",
    authDomain: "oasis-41a24.firebaseapp.com",
    databaseURL: "https://oasis-41a24-default-rtdb.firebaseio.com",
    projectId: "oasis-41a24",
    storageBucket: "oasis-41a24.appspot.com",
    messagingSenderId: "307230308945",
    appId: "1:307230308945:web:ba6c99344b287132151670",
    measurementId: "G-5GWY900RZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
auth.languageCode = 'en'
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click",function(){
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href = "../loginnew.html";
  
  }).catch((error) => {  
    const errorCode = error.code;
    const errorMessage = error.message;    
  });

})

