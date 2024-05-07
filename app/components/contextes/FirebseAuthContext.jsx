"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/Firebase.js";
import { useRouter } from "next/navigation.js";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { LogicContx } from "./LogicContext.jsx";

//////////////
export const AuthContext = createContext();
////////////////////////

const FirebseAuthContext = ({ children }) => {
  const { showPopupFunc, toastFn } = useContext(LogicContx);

  ///Traditional way with no providers
  const { push } = useRouter();
  const images = [
    "https://firebasestorage.googleapis.com/v0/b/swift-cart-6e7e7.appspot.com/o/panda.png?alt=media&token=e02b0aad-0061-4ae9-92fc-ba878ba83c50",
    "https://firebasestorage.googleapis.com/v0/b/swift-cart-6e7e7.appspot.com/o/meerkat.png?alt=media&token=eb783573-5e01-402d-bb6f-6698538a9307",
    "https://firebasestorage.googleapis.com/v0/b/swift-cart-6e7e7.appspot.com/o/giraffe.png?alt=media&token=4ab055a3-6c08-44d2-bba5-99aac791728a",
    "https://firebasestorage.googleapis.com/v0/b/swift-cart-6e7e7.appspot.com/o/cat.png?alt=media&token=e893435f-9dd8-41d6-b5f9-7d7b9e84f58f",
  ];

  const [authName, setAuthName] = useState("");
  const [authEmail, setAuthEmail] = useState("");
  const [authImage, setAuthImage] = useState("");
  const [authUid, setAuthUid] = useState("");
  const [checkUser, setCheckUser] = useState(0);

  ///Later when I worked I realised that I could have used object and it would be much much better than using this approach
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setAuthName(user.displayName);
        setAuthEmail(user.email);
        setAuthImage(user.photoURL);
        setAuthUid(user.uid);
        showPopupFunc(false);
        // console.log("DDWWD")
      } else {
        setAuthName("");
        setAuthEmail("");
        setAuthImage("");
        setAuthUid("");
        showPopupFunc(true);
      }
    });

    return () => {
      unsub();
    };
    //prevents memory leak
  }, [checkUser]);
  // console.log(authName)
  //Create userCollecton with Document

  //User Auth
  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // setCheckUser(checkUser + 1)
      push("/");
      toastFn(true, "Successful sign in");
    } catch (error) {
      console.error(error);
      toastFn(false, "Please check your credentials, try again");
    }
  };

  const signUp = async (username, email, password) => {
    try {
      const signUpUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(signUpUser?.user, {
        displayName: username,
        photoURL: images[Math.floor(Math.random() * images.length)], //code for random image
      });
      setCheckUser(checkUser + 1);
      push("/");
      toastFn(true, "Successful registration");
    } catch (error) {
      console.error(error);
      toastFn(false, "Please check your credentials, try again");
    }
  };

  const signOutUsr = async () => {
    try {
      await signOut(auth);
      push("/signin");
      setCheckUser(checkUser + 1);
      toastFn(true, "Successful sign out");
    } catch (error) {
      console.error(error);
      toastFn(false, "Uhoh, something wrong please try again");
    }
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          signIn,
          signUp,
          authName,
          authImage,
          signOutUsr,
          authEmail,
          authUid,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default FirebseAuthContext;
