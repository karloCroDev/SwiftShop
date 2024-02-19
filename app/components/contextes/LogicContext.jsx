"use client"
import React, { createContext, useRef, useState } from "react"

export const LogicContx = createContext()

const LogicContext = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false)
  const [closeCart, setCloseCart] = useState(false)

  const [itemDetails, setItemDetails] = useState({})

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
          itemDetails,
          setItemDetails,
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
