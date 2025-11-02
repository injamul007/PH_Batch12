import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const createUsersFunc = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const updateProfileFunc = (displayName, photoURL)=> {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL
    })
  }

  const sendEmailVerificationFunc = ()=> {
    setLoading(true)
    return sendEmailVerification(auth.currentUser)
  }
  
  
  const signinUsersFunc = (email, password)=> {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  
  const signoutUserFunc = ()=>{
    setLoading(true)
    return signOut(auth)
  }
  
  const sendPassResetFunc = (email) => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
  }
  
  const signinWithGoogleFunc = ()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
  
  const signinWithGithubFunc = ()=>{
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
  }
  
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
      setUser(currentUser)
      setLoading(false)
    });
    
    return ()=>{
      unsubscribe();
    }
  },[])

  
  const authData = {
    user,
    setUser,
    createUsersFunc,
    updateProfileFunc,
    sendEmailVerificationFunc,
    signinUsersFunc,
    signoutUserFunc,
    sendPassResetFunc,
    signinWithGoogleFunc,
    signinWithGithubFunc,
    loading,
    setLoading,
  }


  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;