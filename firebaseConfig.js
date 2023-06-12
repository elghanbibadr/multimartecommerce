import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyBFY1QMIankdplYdi2bqY50jU_6Rwot2iI",
    authDomain: "photogallery-c3dd2.firebaseapp.com",
    projectId: "photogallery-c3dd2",
    storageBucket: "photogallery-c3dd2.appspot.com",
    messagingSenderId: "648358178324",
    appId: "1:648358178324:web:0c80de6cf19d914cacc101"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Create a Firestore instance
export const db = getFirestore(app);
export const auth= getAuth(app)


