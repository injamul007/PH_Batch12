import React, { useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)


  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  };

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  //? get current user info
  // onAuthStateChanged(auth, (currentUser) => {
  //   if(currentUser) {
  //     console.log('inside observer: if',currentUser)
  //   }else {
  //     console.log('inside observer: else',currentUser)
  //   }
  // })

  // useEffect(()=>{
  //   //? step-1: observer set
  //   //? step-2: set in a variable
  //   //? step-3: return and call the variable so that you can clear the ref
  // },[])
  

  //? Observer in useEffect Hook to control unnecessary memory consume/memory leak....

  useEffect(()=> {
    //? set the observer
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('current user in auth state change', currentUser)
      setUser(currentUser)
      setLoading(false)
    })
    //? clear the observer on mount
    return ()=> {
      unsubscribe();
    }
  },[]);


  const logOutUser = () => {
    setLoading(true)
    return signOut(auth);
  }


  const authInfo = {
    user,
    createUser,
    loginUser,
    logOutUser,
    signInWithGoogle,
    loading,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;

/**
 * 1. create a context and export it
 * 2. create a provider --- so that you can reuse the context in different places
 *
 * 3. ensure you use the children props inside provider/context
 * 4. make sure use the auth provider in the router/main file where routes is defined
 *
 * 5. make the create user with email and password shared via provider
 * 6. set createUser in the authInfo object to share via context
 */
