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
      if (doesDocExists === 0) {
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

    const cartVals = cart?.values?.map((x) => x.mapValue.fields)
    const favoritesVals = favorites?.values?.map((x) => x.mapValue.fields)

    setData([cartVals, favoritesVals])
  }
  const removeItem = async (category, title) => {
    let count = "cart" ? 1 : 0

    let findIndex = data[count].findIndex(
      (item) => item.title.stringValue === title
    )
    if (findIndex === -1) findIndex = 0
    data[count].splice(findIndex, 1)
    console.log(data[count])
    console.log(Array.isArray(data[count]))
    const newArr = data[count].map((items) => {
      return {
        title: items.title.stringValue,
        image: items.image.stringValue,
        quantity: items.quantity.integerValue,
        price:
          items.price.doubleValue !== undefined
            ? Math.floor(items.price.doubleValue)
            : items.price.integerValue,
      }
    })

    await updateDoc(doc(db, "not-ordered", authUid), {
      [category]: newArr,
    })
    setData([])
    await getData()
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
          createCND,
          authUid,
        }}
      >
        {children}
      </FirestoreContext.Provider>
    </>
  )
}

export default FirebaseFirestoreContext
