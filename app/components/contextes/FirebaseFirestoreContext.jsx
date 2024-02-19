"use client"
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import React, { createContext, useEffect, useContext, useState } from "react"
import { db } from "../firebase/Firebase"
import { AuthContext } from "./FirebseAuthContext"
import { LogicContx } from "./LogicContext"

export const FirestoreContext = createContext()

const FirebaseFirestoreContext = ({ children }) => {
  //Contextes
  const { authEmail } = useContext(AuthContext)
  const { favChangeColor, cartChangeColor } = useContext(LogicContx)
  //Feedback
  const feedback = async (email, content) => {
    await setDoc(doc(db, "feedback", email), {
      //Set the custom email because if there is no user I need to set different email to firebase
      email: email,
      content: content,
    })
  }

  ///
  const addToShopCart = async (cart) => {
    await updateDoc(doc(db, "not-ordered", authEmail), {
      cart: arrayUnion(cart),
    })
  }
  const addToFav = async (favs) => {
    await updateDoc(doc(db, "not-ordered", authEmail), {
      favorites: arrayUnion(favs),
    })
  }

  const [data, setData] = useState([])
  const getData = async () => {
    console.log(authEmail)
    const data = await getDoc(doc(db, "not-ordered", authEmail))
    const cart = data._document?.data?.value?.mapValue?.fields?.cart?.arrayValue
    const favorites =
      data._document?.data?.value?.mapValue?.fields?.favorites?.arrayValue

    const cartVals = cart.values.map((x) => x.mapValue.fields)
    const favoritesVals = favorites.values.map((x) => x.mapValue.fields)

    setData([cartVals, favoritesVals])
  }
  useEffect(() => {
    if (authEmail !== "") {
      getData()
    }
  }, [authEmail, favChangeColor, cartChangeColor])
  return (
    <>
      <FirestoreContext.Provider
        value={{ feedback, addToShopCart, addToFav, data }}
      >
        {children}
      </FirestoreContext.Provider>
    </>
  )
}

export default FirebaseFirestoreContext
