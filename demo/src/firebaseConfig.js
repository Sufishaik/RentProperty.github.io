import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDVac4RBff8qbyF239XhYU0SUx4D5YVI7A",
    authDomain: "blogspace-9a469.firebaseapp.com",
    projectId: "blogspace-9a469",
    storageBucket: "blogspace-9a469.appspot.com",
    messagingSenderId: "1013921926591",
    appId: "1:1013921926591:web:5b7f3483134cb4d0d0a50a",
    measurementId: "G-L6QHSPK0N9"
  };

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)