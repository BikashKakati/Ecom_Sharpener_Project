import React, { createContext, useContext, useEffect, useState } from 'react'
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,updatePassword} from "firebase/auth";
import { auth } from '../services/firebase';

const CartContext = createContext();

export function useCartContext(){
    return useContext(CartContext);
}

export function ContextProvider(props) {
    const [cartProductsDetails, setCartProductsDetails] = useState([]);
    const [userToken, setUserToken] = useState(null);
    const [errMessage, setErrMessage] = useState(null);
    const user = auth.currentUser;

    // useEffect(()=>{
    //   const unSubscribe = onAuthStateChanged(auth,user => {setCurrentUser(user)})
    //   return ()=>{
    //     unSubscribe
    //   }
    // },[])

    function signUpHandler(email,password){
      return createUserWithEmailAndPassword(auth, email,password);
    }

    function logInHandler(email,password){
      return signInWithEmailAndPassword(auth,email,password);
    }
    function logOutHandler(){
      signOut(auth);
    }
    function updatePasswordHandler(newPassword){
      return updatePassword(user, newPassword);
    }

    const contextData ={
        cartProductsDetails,
        setCartProductsDetails,
        signUpHandler,
        logInHandler,
        logOutHandler,
        updatePasswordHandler,
        userToken,
        setUserToken,
        errMessage,
        setErrMessage,
    }
  return (
    <CartContext.Provider value={contextData}>
        {props.children}
    </CartContext.Provider>
  )
}