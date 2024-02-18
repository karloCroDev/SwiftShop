"use client"
import { addDoc, doc, setDoc } from "firebase/firestore"
import React, { createContext } from "react"
import { auth, db } from "../firebase/Firebase"

export const FirestoreContext = createContext()
const FirebaseFirestoreContext = ({ children }) => {
  const user = auth?.currentUser?.email
  const feedback = async (email, content) => {
    await setDoc(doc(db, "feedback", email), {
      //Set the custom email because if there is no user I need to set different email to firebase
      email: email,
      content: content,
    })
  }
  return (
    <>
      <FirestoreContext.Provider value={{ feedback }}>
        {children}
      </FirestoreContext.Provider>
    </>
  )
}

export default FirebaseFirestoreContext
