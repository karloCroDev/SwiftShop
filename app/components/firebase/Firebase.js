// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5gZMtMp2g15eWaYTSlvCRXI2Lq6Uyc2g",
  authDomain: "swift-cart-6e7e7.firebaseapp.com",
  projectId: "swift-cart-6e7e7",
  storageBucket: "swift-cart-6e7e7.appspot.com",
  messagingSenderId: "260779517035",
  appId: "1:260779517035:web:42fba192e82a2cdff37d2e",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
