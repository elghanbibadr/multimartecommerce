import { createContext, useState, useEffect } from "react";
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { getDownloadURL } from "firebase/storage";
import { db } from '../../firebaseConfig'
import { auth } from "../../firebaseConfig";
import { getDocs, collection ,doc,setDoc,getDoc,where,query} from 'firebase/firestore'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from "firebase/auth";


export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [imageUrl, setImageUrl] = useState()

  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const fetchedProducts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }));
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  const createUser = async (email, password, profilePhoto) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    const storage = getStorage();
    const storageRef = ref(storage, `profileImages/${userCredential.user.uid}`);
    await uploadBytes(storageRef, profilePhoto);


    // Get the download URL of the uploaded image
    const imageUrl = await getDownloadURL(storageRef);
    setImageUrl(imageUrl);

    // Store the user in firebase firestore db

    // Store the user in Firebase Firestore
    const userRef = doc(db, 'users', userCredential.user.uid);
    await setDoc(userRef, {
      uid:userCredential.user.uid,
      email: userCredential.user.email,
      profilePhotoUrl: imageUrl,
    });
  
 
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
  
        // Search for user info in Firestore
        const userRef = collection(db, 'users');
        const querySnapshot = await getDocs(query(userRef, where('uid', '==', currentUser.uid)));
  
        if (querySnapshot.size > 0) {
          // User info found
          querySnapshot.forEach((doc) => {
            setImageUrl(doc.data().profilePhotoUrl);
          });
        }
      } else {
        // User is signed out
        setUser(null);
      }
    });
  
    return () => {
      unsubscribe();
    };
  }, []);
  
 

  const value = {
    products,
    setProducts,
    user,
    setUser,
    createUser,
    signIn,
    logout,
    imageUrl,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};




















// import { createContext, useState, useEffect } from "react";
// import { getStorage, ref, uploadBytes } from 'firebase/storage';
// import { getDownloadURL } from "firebase/storage";

// import { db } from '../../firebaseConfig'
// import { getDocs, collection } from 'firebase/firestore'
// import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged } from "firebase/auth";
// import {auth} from "../../firebaseConfig";

// export const AppContext = createContext(null);
// export const AppContextProvider = ({ children }) => {
//     const [products, setProducts] = useState([])
//     const [imageUrl, setImageUrl] = useState('');
//     const [user,setUser]=useState({})

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const querySnapshot = await getDocs(collection(db, 'products'));
//                 const fetchedProducts = querySnapshot.docs.map((doc) => ({
//                     id: doc.id,
//                     item: doc.data(),
//                 }));
//                 setProducts(fetchedProducts);
//             } catch (error) {
//                 console.error('Error fetching products:', error);
//             }
//         };

//         fetchData();
//     }, []);
    
//   const createUser = async(email, password,profilePhoto) => {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);

//     const storage = getStorage();
//       const storageRef = ref(storage, `profileImages/${userCredential.user.uid}`);
//       await uploadBytes(storageRef, profilePhoto);
      
//       console.log('Image uploaded successfully');
      
//       // Get the download URL of the uploaded image
//       const imageUrl = await getDownloadURL(storageRef);
//       setImageUrl(imageUrl);
      
      
//       console.log('Image download URL:', imageUrl);
//   };

//    const signIn = (email, password) =>  {
//     return signInWithEmailAndPassword(auth, email, password)
//    }

//   const logout = () => {
//       return signOut(auth)
//   }

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       console.log(currentUser)
//     });
//     return () => {
//       unsubscribe();
//     };
//   }, []);


//     const value = {
//         products,
//         setProducts,
//         user,
//         setUser,
//         createUser,
//         signIn,
//         logout,
//         imageUrl
//     }

//     return <AppContext.Provider value={value} >{children}</AppContext.Provider>

// }