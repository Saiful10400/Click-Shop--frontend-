import { createContext, useEffect, useState } from "react";
export const parentContext=createContext(null)
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import auth from "../components/Authentication/firebase_config"


const DataProvider = ({children}) => {
const googleProvider=new GoogleAuthProvider

// user handle
const[user,setUser]=useState(null)
useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentuser=>{
        setUser(currentuser)
        
    })
    return unsubscribe
  },[])
// log in handle.
const googleLogin=()=>{
return signInWithPopup(auth,googleProvider)
}

// logout handle
const logout=()=>{
   return signOut(auth)
}



    const data={googleLogin,user,logout}
    return (
        <div>
            <parentContext.Provider value={data}>
                {children}
            </parentContext.Provider>
        </div>
    );
};

export default DataProvider;