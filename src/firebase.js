import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBUjNGGsdjVtpXCUBjGpld-dnibzwWxbK0",
    authDomain: "ben-alice-wedding-app.firebaseapp.com",
    projectId: "ben-alice-wedding-app",
    storageBucket: "ben-alice-wedding-app.firebasestorage.app",
    messagingSenderId: "598997462646",
    appId: "1:598997462646:web:7e915a0bdd4ca0c7707957"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // We added this!