import { createContext, useState, useEffect } from "react";
import { db } from '../../firebaseConfig'
import { getDocs, collection } from 'firebase/firestore'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged } from "firebase/auth";
import {auth} from "../../firebaseConfig";

export const AppContext = createContext(null);
export const AppContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [user,setUser]=useState({})

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
    
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

   const signIn = (email, password) =>  {
    return signInWithEmailAndPassword(auth, email, password)
   }

  const logout = () => {
      return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
console.log(user)

    const value = {
        products,
        setProducts,
        user,
        setUser,
        createUser,
        signIn,
        logout
    }

    return <AppContext.Provider value={value} >{children}</AppContext.Provider>

}