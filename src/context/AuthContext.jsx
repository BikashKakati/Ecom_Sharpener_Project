import React, { createContext, useContext, useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updatePassword } from "firebase/auth";
import { auth } from '../services/firebase';

const LOCAL_STORAGE_KEY = "USER_TOKEN";

const AuthContext = createContext();

export function useAuthContext() {
    return useContext(AuthContext);
}

export function AuthContextProvider(props) {
    const initialToken = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    const [userToken, setUserToken] = useState(initialToken);
    const [errMessage, setErrMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const user = auth.currentUser;
    // useEffect(()=>{
    //     if(userToken){
    //         setTimeout(()=>{
    //             localStorage.setItem(LOCAL_STORAGE_KEY,null);
    //         },1000*60*5)
    //     }
    // },[userToken])

    function signUpHandler(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function logInHandler(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
    function logOutHandler() {
        signOut(auth);
    }
    function updatePasswordHandler(newPassword) {
        return updatePassword(user, newPassword);
    }

    const contextData = {
        signUpHandler,
        logInHandler,
        logOutHandler,
        updatePasswordHandler,
        userToken,
        setUserToken,
        errMessage,
        setErrMessage,
        isLoading,
        setIsLoading,
    }
    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    )
}