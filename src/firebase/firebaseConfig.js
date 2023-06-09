// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp2GKMbqhYMDqNIMiWxDbVUCuZCap7rLE",
  authDomain: "multimartecommerce.firebaseapp.com",
  projectId: "multimartecommerce",
  storageBucket: "multimartecommerce.appspot.com",
  messagingSenderId: "685421002116",
  appId: "1:685421002116:web:b4a3b09ad6fd3cd363b1d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const db=getFirestore(app)
const storage = getStorage(app);
export {auth,storage,db}

