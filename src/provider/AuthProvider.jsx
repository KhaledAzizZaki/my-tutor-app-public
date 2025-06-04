import React from "react";
import { auth } from "../../firebase.init";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  //
  const handleCreateUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //
  const handleSignInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //
  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  //
  const authData = {
    handleCreateUser,
    handleSignInUser,
    handleGoogleSignIn,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
