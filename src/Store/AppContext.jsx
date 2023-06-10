import { createContext, useState, useEffect } from "react";
import { db } from '../../firebaseConfig'
import { getDocs, collection } from 'firebase/firestore'

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [user,setUser]=useState()
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




    const value = {
        products,
        setProducts,
        user,
        setUser
    }

    return <AppContext.Provider value={value} >{children}</AppContext.Provider>

}