"use client"
import {
  FieldValue,
  addDoc,
  arrayUnion,
  collection,
  count,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore"
import React, { createContext, useEffect, useContext, useState } from "react"
import { db } from "../firebase/Firebase"
import { AuthContext } from "./FirebseAuthContext"
import { LogicContx } from "./LogicContext"

export const FirestoreContext = createContext()

const FirebaseFirestoreContext = ({ children }) => {
  //Contextes
  const { authUid } = useContext(AuthContext)
  const { favChangeColor, cartChangeColor } = useContext(LogicContx)
  //Feedback
  const feedback = async (email, content) => {
    await setDoc(doc(db, "feedback", authUid), {
      email: authUid !== "" ? email : authUid,
      content: content,
    })
  }

  ///
  const createCND = async () => {
    try {
      const q = query(
        collection(db, "not-ordered"),
        where("uid", "==", authUid)
      )
      console.log(q)
      console.log(authUid)
      const doesDocExists = await getDocs(q)
      console.log(doesDocExists)
      if (doesDocExists.size === 0) {
        await setDoc(doc(db, "not-ordered", authUid), {
          cart: [],
          favorites: [],
          uid: authUid,
        })
      }
    } catch (error) {
      console.error(error)
    }
  }
  // useEffect(() => {
  //   if (authUid !== null) {
  //     createCND()
  //   }
  // }, [authUid])
  const addToShopCart = async (cart) => {
    await updateDoc(doc(db, "not-ordered", authUid), {
      cart: arrayUnion(cart),
    })
  }

  const addToFav = async (favs) => {
    await updateDoc(doc(db, "not-ordered", authUid), {
      favorites: arrayUnion(favs),
    })
  }

  const [data, setData] = useState([])
  const getData = async () => {
    const data = await getDoc(doc(db, "not-ordered", authUid))
    const cart = data._document?.data?.value?.mapValue?.fields?.cart?.arrayValue
    const favorites =
      data._document?.data?.value?.mapValue?.fields?.favorites?.arrayValue

    let cartVals = cart?.values?.map((x) => x.mapValue.fields)
    let favoritesVals = favorites?.values?.map((x) => x.mapValue.fields)
    if (!cartVals) cartVals = []
    if (!favoritesVals) favoritesVals = []
    setData([cartVals, favoritesVals])
  }
  const removeItem = async (category, title) => {
    let count
    category === "cart" ? (count = 0) : (count = 1)

    const filterThatItem = data[count]
      .map((itm, i) => {
        if (itm.title.stringValue === title) return i
        return ""
      })
      .filter((itm) => itm !== "")
    //I didn't want to use findIndex because of some strange things
    console.log(data[count].splice(filterThatItem[0], 1))
    const newArr = data[count].map((items) => {
      return {
        title: items.title.stringValue,
        image: items.image.stringValue,
        quantity: Number(items.quantity.integerValue),
        price: Number(items.price.doubleValue)
          ? Number(Math.floor(items.price.doubleValue))
          : Number(items.price.integerValue),
      }
    })
    console.log(newArr)
    await updateDoc(doc(db, "not-ordered", authUid), {
      [category]: newArr,
    })
  }
  const updateQuantity = async (quantityNum) => {
    let count
    category === "cart" ? (count = 0) : (count = 1)

    const filterThatItem = data[count]
      .map((itm, i) => {
        if (itm.title.stringValue === title) return itm
        return ""
      })
      .filter((itm) => itm !== "")
    await updateDoc(doc(db, "not-ordered", authUid), {})
  }
  useEffect(() => {
    if (authUid !== "") {
      getData()
    }
  }, [favChangeColor, cartChangeColor, authUid])

  return (
    <>
      <FirestoreContext.Provider
        value={{
          feedback,
          addToShopCart,
          addToFav,
          data,
          removeItem,
          // createCND,
          authUid,
        }}
      >
        {children}
      </FirestoreContext.Provider>
    </>
  )
}

export default FirebaseFirestoreContext
