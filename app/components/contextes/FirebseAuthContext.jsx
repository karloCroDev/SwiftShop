"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../firebase/Firebase.js"
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth"

export const AuthContext = createContext()

const FirebseAuthContext = ({ children }) => {
  ///Traditional way with no providers
  const [authName, setAuthName] = useState("")
  const [authImage, setAuthImage] = useState("")

  const images = [
    "https://i.postimg.cc/SQcxrzJW/meerkat.png",
    "https://i.postimg.cc/DzccLz1F/giraffe.png",
    "https://i.postimg.cc/SRHLkYbL/panda.png",
    "https://i.postimg.cc/mgY3WrXM/cat.png",
  ]
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.displayName, user.photoURL)

        setAuthName(user.displayName)
        setAuthImage(user.photoURL)
      } else {
        console.log("There is no user")
      }
    })
  }, [])
  const signIn = async (email, password) => {
    try {
      const signInUser = await signInWithEmailAndPassword(auth, email, password)
      console.log(signInUser?.user.displayName)
      console.log("Successful sign in")
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
    } catch (error) {
      console.error(error)
      alert("Your email is invalid or already exists :/")
    }
  }
  const signOutUsr = async () => {
    try {
      const signOutUser = await signOut(auth)
      console.log("Succesful sign out ")
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
