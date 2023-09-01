// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMp-KUHW-V58trwkzfwifRQcbCK7FfgB4",
    authDomain: "easypass-ef6b4.firebaseapp.com",
    projectId: "easypass-ef6b4",
    storageBucket: "easypass-ef6b4.appspot.com",
    messagingSenderId: "973796360698",
    appId: "1:973796360698:web:a471848249651ee13f6443",
    measurementId: "G-CXNXD78H69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);