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
  const [itemsOnTheCart,setItemsOnTheCart] = useState([])
  const [userdelete,setuserdelete] = useState(false)
  const [numberOfiItemsInTheCart,setNumberOfItemsInTheCart] = useState(itemsOnTheCart.length)
  const [user, setUser] = useState(undefined);


  useEffect(() =>{
    if (user){
      setItemsOnTheCart(user.cart)
      // setNumberOfItemsInTheCart(user.cart.length)
    }
  },[user])

  // update the doc when user add a new item to cart and icreare the number of item in cart
  useEffect(() => {
    if (user){
      const updateCart = async () => {
        setNumberOfItemsInTheCart(itemsOnTheCart.length);
        const userRef = doc(db, 'users', user.uid);
        await setDoc(userRef, {
          email: user.email,
          profilePhotoUrl: user.profilePhotoUrl,
          uid: user.uid,
          cart: itemsOnTheCart,
        });
    }
    updateCart();
    };
  
  }, [itemsOnTheCart]);
  

// fetch our store product
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


  // CREATE A NEW USER AND UPLOAD PROFIL IMAGE TO FIRESTORE STORAGE AND ADD A NEW DOC WITH USER DATA
  const createUser = async (email, password, profilePhoto) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    const storage = getStorage();
    const storageRef = ref(storage, `profileImages/${userCredential.user.uid}`);
    await uploadBytes(storageRef, profilePhoto);
    // Get the download URL of the uploaded image
    const imageUrl = await getDownloadURL(storageRef);

    // Store the user in Firebase Firestore
    const userRef = doc(db, 'users', userCredential.user.uid);
    await setDoc(userRef, {
      uid:userCredential.user.uid,
      email: userCredential.user.email,
      profilePhotoUrl: imageUrl,
    });
  
 
  };


  // SIGN IN USER WITH EMAIL AND PASSWORD
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  };

  // LOGOUT USER
  const logout = () => {
    setUser(undefined)
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // Search for user info in Firestore  
        const userRef = collection(db, 'users');
        const querySnapshot = await getDocs(query(userRef, where('uid', '==', currentUser.uid)));
      
        if (querySnapshot.size > 0) {
          // User info found
          querySnapshot.forEach((doc) => {
            let userData = doc.data();
            setUser(userData)
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
  
console.log(itemsOnTheCart)
  const value = {
    products,
    setProducts,
    user,
    setUser,
    createUser,
    signIn,
    logout,
    itemsOnTheCart,
    setItemsOnTheCart,
    userdelete,
    setuserdelete,
    numberOfiItemsInTheCart,
    setNumberOfItemsInTheCart
  };

  console.log("user" ,user)
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};


















