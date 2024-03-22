"use client"
import React, { createContext, useRef, useState } from "react"

export const LogicContx = createContext()

const LogicContext = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false)
  const [closeCart, setCloseCart] = useState(false)
  const [toast, setToast] = useState(false)

  const [favChangeColor, setFavChangeColor] = useState(false)
  const [cartChangeColor, setCartChangeColor] = useState(false)

  const showPopupFunc = (state) => {
    if (state) {
      setTimeout(() => {
        setShowPopup(state)
      }, 7500)
      return
    }
    setShowPopup(state)
  }
  const showToastFunc = (state) => {
    if (state) {
      setTimeout(() => {
        setToast(state)
      }, 7500)
      return
    }
    setToast(state)
  }
  return (
    <>
      <LogicContx.Provider
        value={{
          showPopup,
          setShowPopup,
          closeCart,
          setCloseCart,
          favChangeColor,
          setFavChangeColor,
          cartChangeColor,
          setCartChangeColor,
          showPopupFunc,
          showToastFunc,
        }}
      >
        {children}
      </LogicContx.Provider>
    </>
  )
}

export default LogicContext
