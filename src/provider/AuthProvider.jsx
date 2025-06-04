import React from "react";
import { auth } from "../../firebase.init";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

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
  const authData = {
    handleCreateUser,
    handleSignInUser,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
