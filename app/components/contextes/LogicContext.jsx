"use client"
import React, { createContext, useRef, useState } from "react"

export const LogicContx = createContext()

const LogicContext = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false)
  const [closeCart, setCloseCart] = useState(false)

  const [favChangeColor, setFavChangeColor] = useState(false)
  const [cartChangeColor, setCartChangeColor] = useState(false)
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
        }}
      >
        {children}
      </LogicContx.Provider>
    </>
  )
}

export default LogicContext
