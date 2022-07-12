import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyArGSRCigZdNSBjCSFugecCwxGZbypvzzg",
    authDomain: "easymoney-e8559.firebaseapp.com",
    projectId: "easymoney-e8559",
    storageBucket: "easymoney-e8559.appspot.com",
    messagingSenderId: "783460912387",
    appId: "1:783460912387:web:1e8c9c25204ba28581ed36",
    measurementId: "G-Q1S3ZT16KL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
export const auth = getAuth(app);


//Controllers Firestore
