import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const createUserFunc = (email,password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUserFunc = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signOutUserFunc = () => {
    setLoading(true)
    return signOut(auth)
  }

  const googleSignInFunc = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
      setUser(currentUser)
      setLoading(false);
    });
    return ()=> {
      unsubscribe();
    }
  },[])



  const authInfo = {
    user,
    setUser,
    loading, 
    setLoading,
    createUserFunc,
    signInUserFunc,
    signOutUserFunc,
    googleSignInFunc,
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;