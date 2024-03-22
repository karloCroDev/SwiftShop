"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { auth, db } from "../firebase/Firebase.js"
import { useRouter, usePathname } from "next/navigation.js"
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { LogicContx } from "./LogicContext.jsx"
export const AuthContext = createContext()

//Make toast messages!!!
const FirebseAuthContext = ({ children }) => {
  const { showToastFunc, showPopupFunc } = useContext(LogicContx)

  ///Traditional way with no providers
  const { push } = useRouter()
  const images = [
    "https://i.postimg.cc/SQcxrzJW/meerkat.png",
    "https://i.postimg.cc/DzccLz1F/giraffe.png",
    "https://i.postimg.cc/SRHLkYbL/panda.png",
    "https://i.postimg.cc/mgY3WrXM/cat.png",
  ]

  const [authName, setAuthName] = useState("")
  const [authEmail, setAuthEmail] = useState("")
  const [authImage, setAuthImage] = useState("")
  const [authUid, setAuthUid] = useState("")
  const [checkUser, setCheckUser] = useState(0)

  ///Later when I worked I realised that I could have used object and it would be much much better than using this approach
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user)
        setAuthName(user.displayName)
        setAuthEmail(user.email)
        setAuthImage(user.photoURL)
        setAuthUid(user.uid)
        showPopupFunc(false)
        showToastFunc(false)
        // console.log("DDWWD")
      } else {
        setAuthName("")
        setAuthEmail("")
        setAuthImage("")
        setAuthUid("")
        showPopupFunc(true)
        showToastFunc(true)
      }
    })

    return () => {
      unsub()
    }
    //prevents memory leak
  }, [checkUser])
  // console.log(authName)
  //Create userCollecton with Document

  //User Auth
  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      // setCheckUser(checkUser + 1)
    } catch (error) {
      console.error(error)
    }
  }
  const signUp = async (username, email, password) => {
    try {
      const signUpUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      await updateProfile(signUpUser?.user, {
        displayName: username,
        photoURL: images[Math.floor(Math.random() * images.length)], //code for random image
      })
      setCheckUser(checkUser + 1)

      push("/")
    } catch (error) {
      console.error(error)
      alert("Invalid sign up please try again!")
    }
  }
  const signOutUsr = async () => {
    try {
      await signOut(auth)
      push("/signin")
      alert("You are logged out successfuly")
      setCheckUser(checkUser + 1)
    } catch (error) {
      alert("Wrong email or password :/")
      console.error(error)
    }
  }

  // signOutUsr()
  ////Providers
  // const googleSignIn = async () => {
  //   const provider = new GoogleAuthProvider()
  //   provider.addScope("https://www.googleapis.com/auth/contacts.readonly")

  //   const popup = await signInWithPopup(auth, provider)
  //   console.log(popup.user.displayName)
  // }

  //Do this later, I want to finish the project as soon as possible

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
  )
}

export default FirebseAuthContext

////Atributte the users
//<a href="https://www.flaticon.com/free-icons/animals" title="animals icons">Animals icons created by Freepik - Flaticon</a>

//<a href="https://www.flaticon.com/free-icons/panda" title="panda icons">Panda icons created by Freepik - Flaticon</a>

//<a href="https://www.flaticon.com/free-icons/animal" title="animal icons">Animal icons created by Freepik - Flaticon</a>

//<a href="https://www.flaticon.com/free-icons/animals" title="animals icons">Animals icons created by Freepik - Flaticon</a>
