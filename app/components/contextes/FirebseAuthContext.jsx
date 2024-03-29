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
    "https://i.postimg.cc/SQcxrzJW/meerkat.png",
    "https://i.postimg.cc/DzccLz1F/giraffe.png",
    "https://i.postimg.cc/SRHLkYbL/panda.png",
    "https://i.postimg.cc/mgY3WrXM/cat.png",
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
