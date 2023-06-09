import { createContext, useState, useEffect } from "react";
export const AppContext = createContext(null);


export const AppContextProvider = ({ children }) => {
  const [products,setProducts]=useState([])


  const value = {
  
  }

  return <AppContext.Provider value={value} >{children}</AppContext.Provider>

}